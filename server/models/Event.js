import mongoose from 'mongoose';

const eventSectionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['paragraphs', 'image', 'googleForm', 'qrCode'],
      required: true,
      trim: true,
    },
    paragraphs: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      default: '',
      trim: true,
    },
    formLink: {
      type: String,
      default: '',
      trim: true,
    },
    qrCode: {
      type: String,
      default: '',
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ['', 'nil', 'discourse', 'monologic', 'dialogic', 'panel'],
      default: '',
      trim: true,
    },
    sections: {
      type: [eventSectionSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
