import express from 'express';
import multer from 'multer';
import Event from '../models/Event.js';
import { cloudinary, ensureCloudinaryConfigured } from '../config/cloudinary.js';

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

const requireAdminSession = (req, res, next) => {
  const isAdminSession = String(req.headers['x-admin-session'] || '').toLowerCase() === 'true';

  if (!isAdminSession) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access.',
    });
  }

  return next();
};

const normalizeSections = (sections = []) =>
  sections
    .flatMap((section = {}) => {
      const normalizedParagraphs = Array.isArray(section.paragraphs)
        ? section.paragraphs.map((paragraph) => String(paragraph || '').trim()).filter(Boolean)
        : [String(section.paragraph || section.description || '').trim()].filter(Boolean);
      const normalizedImage = String(section.image || '').trim();
      const normalizedType = String(section.type || '').trim().toLowerCase();

      if (normalizedType === 'image') {
        return [
          {
            type: 'image',
            image: normalizedImage,
            paragraphs: [],
          },
        ];
      }

      if (normalizedType === 'paragraphs') {
        return [
          {
            type: 'paragraphs',
            paragraphs: normalizedParagraphs,
            image: '',
          },
        ];
      }

      if (normalizedParagraphs.length && normalizedImage) {
        return [
          {
            type: 'paragraphs',
            paragraphs: normalizedParagraphs,
            image: '',
          },
          {
            type: 'image',
            image: normalizedImage,
            paragraphs: [],
          },
        ];
      }

      if (normalizedParagraphs.length) {
        return [
          {
            type: 'paragraphs',
            paragraphs: normalizedParagraphs,
            image: '',
          },
        ];
      }

      if (normalizedImage) {
        return [
          {
            type: 'image',
            image: normalizedImage,
            paragraphs: [],
          },
        ];
      }

      return [];
    })
    .filter((section) => section.type === 'image' || section.type === 'paragraphs');

const validatePayload = ({ title, date, time, location, sections }) => {
  const normalizedTitle = String(title || '').trim();
  const normalizedDate = String(date || '').trim();
  const normalizedTime = String(time || '').trim();
  const normalizedLocation = String(location || '').trim();
  const normalizedSections = normalizeSections(sections);

  if (!normalizedTitle || !normalizedDate || !normalizedTime || !normalizedLocation) {
    return {
      error: 'Title, date, time and location are required.',
    };
  }

  if (!normalizedSections.length) {
    return {
      error: 'At least one section is required.',
    };
  }

  const hasInvalidSection = normalizedSections.some((section) => {
    if (section.type === 'image') {
      return !section.image;
    }

    if (section.type === 'paragraphs') {
      return !section.paragraphs.length;
    }

    return true;
  });

  if (hasInvalidSection) {
    return {
      error: 'Each paragraph section needs para content and each image section needs image URL.',
    };
  }

  return {
    value: {
      title: normalizedTitle,
      date: normalizedDate,
      time: normalizedTime,
      location: normalizedLocation,
      sections: normalizedSections,
    },
  };
};

// Public endpoint - no authentication required
router.get('/public-events', async (_req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    console.error('Fetch public events error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to fetch events.',
    });
  }
});

router.use(requireAdminSession);

router.post('/upload-image', (req, res) => {
  upload.single('image')(req, res, async (uploadError) => {
    try {
      if (uploadError) {
        return res.status(400).json({
          success: false,
          message: uploadError.message || 'Invalid upload request.',
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'Please select an image file to upload.',
        });
      }

      if (!ensureCloudinaryConfigured()) {
        return res.status(500).json({
          success: false,
          message: 'Cloudinary is not configured. Set CLOUDINARY env variables.',
        });
      }

      const uploadFolder = String(process.env.CLOUDINARY_PROFILE_FOLDER || 'thestage/img').trim();
      const base64File = req.file.buffer.toString('base64');
      const dataUri = `data:${req.file.mimetype};base64,${base64File}`;
      const uploadOptions = {
        resource_type: 'image',
      };

      if (uploadFolder) {
        uploadOptions.folder = uploadFolder;
      }

      const result = await cloudinary.uploader.upload(dataUri, uploadOptions);

      return res.status(200).json({
        success: true,
        message: 'Image uploaded successfully.',
        url: result.secure_url,
        publicId: result.public_id,
      });
    } catch (error) {
      console.error('Upload image error:', error);
      return res.status(500).json({
        success: false,
        message: 'Unable to upload image.',
      });
    }
  });
});

router.get('/events', async (_req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    console.error('Fetch events error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to fetch events.',
    });
  }
});

router.post('/events', async (req, res) => {
  try {
    const sections = Array.isArray(req.body.sections)
      ? req.body.sections
      : [
          {
            type: req.body.type,
            image: String(req.body.image || '').trim(),
            paragraphs: [String(req.body.paragraph || '').trim()].filter(Boolean),
          },
        ];

    const payloadResult = validatePayload({
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      sections,
    });

    if (payloadResult.error) {
      return res.status(400).json({
        success: false,
        message: payloadResult.error,
      });
    }

    const event = await Event.create(payloadResult.value);

    return res.status(201).json({
      success: true,
      message: 'Event created successfully.',
      event,
    });
  } catch (error) {
    console.error('Create event error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to create event.',
    });
  }
});

router.put('/events/:id', async (req, res) => {
  try {
    const payloadResult = validatePayload({
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      sections: req.body.sections,
    });

    if (payloadResult.error) {
      return res.status(400).json({
        success: false,
        message: payloadResult.error,
      });
    }

    const event = await Event.findByIdAndUpdate(req.params.id, payloadResult.value, {
      new: true,
      runValidators: true,
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Event updated successfully.',
      event,
    });
  } catch (error) {
    console.error('Update event error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to update event.',
    });
  }
});

router.delete('/events/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Event deleted successfully.',
    });
  } catch (error) {
    console.error('Delete event error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to delete event.',
    });
  }
});

export default router;
