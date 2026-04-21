import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminEventsManager.css';

const createEmptyParagraphSection = () => ({
  paragraphs: [''],
});

const createEmptyImageSection = () => ({
  image: '',
  inputMode: 'upload',
});

const createEmptyForm = () => ({
  title: '',
  date: '',
  time: '',
  location: '',
  paragraphSections: [createEmptyParagraphSection()],
  imageSections: [],
});

const AdminEventsManager = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState(createEmptyForm);
  const [editingId, setEditingId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingImageSectionIndex, setUploadingImageSectionIndex] = useState(-1);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const adminSessionHeaders = useMemo(
    () => ({
      'x-admin-session': 'true',
    }),
    []
  );

  const sessionHeaders = useMemo(
    () => ({
      ...adminSessionHeaders,
      'Content-Type': 'application/json',
    }),
    [adminSessionHeaders]
  );

  useEffect(() => {
    const isSessionActive = localStorage.getItem('theStageAdminSession') === 'true';

    if (!isSessionActive) {
      navigate('/login');
      return;
    }

    fetchEvents();
  }, [navigate]);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch('/api/admin/events', {
        method: 'GET',
        headers: sessionHeaders,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Unable to load events.');
        return;
      }

      setEvents(data.events || []);
    } catch {
      setError('Unable to connect to server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const addParagraphSection = () => {
    setFormData((previous) => ({
      ...previous,
      paragraphSections: [...previous.paragraphSections, createEmptyParagraphSection()],
    }));
  };

  const removeParagraphSection = (index) => {
    setFormData((previous) => {
      if (previous.paragraphSections.length === 1) {
        return previous;
      }

      return {
        ...previous,
        paragraphSections: previous.paragraphSections.filter((_, sectionIndex) => sectionIndex !== index),
      };
    });
  };

  const handleParagraphChange = (sectionIndex, paragraphIndex, value) => {
    setFormData((previous) => ({
      ...previous,
      paragraphSections: previous.paragraphSections.map((section, currentSectionIndex) => {
        if (currentSectionIndex !== sectionIndex) {
          return section;
        }

        return {
          ...section,
          paragraphs: section.paragraphs.map((paragraph, currentParagraphIndex) =>
            currentParagraphIndex === paragraphIndex ? value : paragraph
          ),
        };
      }),
    }));
  };

  const addParagraph = (sectionIndex) => {
    setFormData((previous) => ({
      ...previous,
      paragraphSections: previous.paragraphSections.map((section, currentSectionIndex) =>
        currentSectionIndex === sectionIndex
          ? {
              ...section,
              paragraphs: [...section.paragraphs, ''],
            }
          : section
      ),
    }));
  };

  const removeParagraph = (sectionIndex, paragraphIndex) => {
    setFormData((previous) => ({
      ...previous,
      paragraphSections: previous.paragraphSections.map((section, currentSectionIndex) => {
        if (currentSectionIndex !== sectionIndex) {
          return section;
        }

        if (section.paragraphs.length === 1) {
          return section;
        }

        return {
          ...section,
          paragraphs: section.paragraphs.filter((_, currentParagraphIndex) => currentParagraphIndex !== paragraphIndex),
        };
      }),
    }));
  };

  const handleImageSectionChange = (index, value) => {
    setFormData((previous) => ({
      ...previous,
      imageSections: previous.imageSections.map((section, sectionIndex) =>
        sectionIndex === index
          ? {
              ...section,
              image: value,
            }
          : section
      ),
    }));
  };

  const handleImageSectionModeChange = (index, inputMode) => {
    setFormData((previous) => ({
      ...previous,
      imageSections: previous.imageSections.map((section, sectionIndex) =>
        sectionIndex === index
          ? {
              ...section,
              inputMode,
              image: '',
            }
          : section
      ),
    }));
  };

  const addImageSection = () => {
    setFormData((previous) => ({
      ...previous,
      imageSections: [...previous.imageSections, createEmptyImageSection()],
    }));
  };

  const removeImageSection = (index) => {
    setFormData((previous) => ({
      ...previous,
      imageSections: previous.imageSections.filter((_, sectionIndex) => sectionIndex !== index),
    }));
  };

  const handleImageFileChange = async (index, event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    setError('');
    setMessage('');

    try {
      setUploadingImageSectionIndex(index);
      const formDataPayload = new FormData();
      formDataPayload.append('image', selectedFile);

      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        headers: adminSessionHeaders,
        body: formDataPayload,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Unable to upload image.');
        return;
      }

      handleImageSectionChange(index, data.url || '');
      setMessage('Image uploaded to Cloudinary.');
    } catch {
      setError('Unable to upload image.');
    } finally {
      setUploadingImageSectionIndex(-1);
      event.target.value = '';
    }
  };

  const resetForm = () => {
    setFormData(createEmptyForm());
    setEditingId('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    const payload = {
      title: formData.title.trim(),
      date: formData.date.trim(),
      time: formData.time.trim(),
      location: formData.location.trim(),
      sections: [
        ...formData.paragraphSections.map((section) => ({
          type: 'paragraphs',
          paragraphs: section.paragraphs.map((paragraph) => paragraph.trim()),
          image: '',
        })),
        ...formData.imageSections
          .map((section) => ({
            type: 'image',
            paragraphs: [],
            image: section.image.trim(),
          }))
          .filter((section) => section.image),
      ],
    };

    try {
      setIsSaving(true);

      const response = await fetch(
        editingId ? `/api/admin/events/${editingId}` : '/api/admin/events',
        {
          method: editingId ? 'PUT' : 'POST',
          headers: sessionHeaders,
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Unable to save event.');
        return;
      }

      setMessage(editingId ? 'Event updated successfully.' : 'Event created successfully.');
      resetForm();
      await fetchEvents();
    } catch {
      setError('Unable to connect to server.');
    } finally {
      setIsSaving(false);
    }
  };

  const startEdit = (eventItem) => {
    setEditingId(eventItem._id);
    setMessage('');
    setError('');

    const parsedParagraphSections = [];
    const parsedImageSections = [];

    (eventItem.sections || []).forEach((section = {}) => {
      const paragraphs = Array.isArray(section.paragraphs)
        ? section.paragraphs.filter(Boolean)
        : section.paragraph || section.description
          ? [section.paragraph || section.description]
          : [];
      const image = String(section.image || '').trim();
      const sectionType = String(section.type || '').trim().toLowerCase();

      if (sectionType === 'paragraphs') {
        if (paragraphs.length) {
          parsedParagraphSections.push({ paragraphs });
        }
        return;
      }

      if (sectionType === 'image') {
        if (image) {
          parsedImageSections.push({ image, inputMode: 'link' });
        }
        return;
      }

      if (paragraphs.length) {
        parsedParagraphSections.push({ paragraphs });
      }

      if (image) {
        parsedImageSections.push({ image, inputMode: 'link' });
      }
    });

    setFormData({
      title: eventItem.title || '',
      date: eventItem.date || '',
      time: eventItem.time || '',
      location: eventItem.location || '',
      paragraphSections: parsedParagraphSections.length
        ? parsedParagraphSections
        : [createEmptyParagraphSection()],
      imageSections: parsedImageSections,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Delete this event permanently?');

    if (!isConfirmed) {
      return;
    }

    try {
      setError('');
      setMessage('');

      const response = await fetch(`/api/admin/events/${id}`, {
        method: 'DELETE',
        headers: sessionHeaders,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Unable to delete event.');
        return;
      }

      if (editingId === id) {
        resetForm();
      }

      setMessage('Event deleted successfully.');
      await fetchEvents();
    } catch {
      setError('Unable to connect to server.');
    }
  };

  return (
    <main className="admin-events-page">
      <section className="admin-events-wrap">
        <header className="admin-events-header">
          <div>
            <p className="admin-events-kicker">Admin Panel</p>
            <h1>{editingId ? 'Edit Event' : 'Create Event'}</h1>
          </div>
          <Link to="/admin/dashboard" className="admin-events-back-link">
            Back to Dashboard
          </Link>
        </header>

        <form className="admin-events-form" onSubmit={handleSubmit}>
          <div className="admin-events-grid">
            <label>
              Event Title
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleFieldChange}
                placeholder="The Stage Annual Meet"
                required
              />
            </label>

            <label>
              Date
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleFieldChange}
                placeholder="20 April 2026"
                required
              />
            </label>

            <label>
              Time
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleFieldChange}
                placeholder="06:00 PM"
                required
              />
            </label>

            <label>
              Location
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleFieldChange}
                placeholder="Chennai"
                required
              />
            </label>
          </div>

          <section className="admin-events-sections" aria-label="Event sections">
            <div className="admin-events-section-group">
              <div className="admin-events-sections-title-row">
                <h2>Paragraph Sections</h2>
                <button type="button" onClick={addParagraphSection} className="admin-events-add-section-btn">
                  Add Paragraph Section
                </button>
              </div>

              {formData.paragraphSections.map((section, index) => (
                <article className="admin-events-section-card" key={`paragraph-section-${index}`}>
                  <div className="admin-events-section-head">
                    <h3>Paragraph Section:{index + 1}</h3>
                    <button
                      type="button"
                      onClick={() => removeParagraphSection(index)}
                      disabled={formData.paragraphSections.length === 1}
                      className="admin-events-remove-btn"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="admin-events-paragraphs-wrap">
                    <div className="admin-events-paragraphs-head">
                      <p>Paragraphs</p>
                      <button
                        type="button"
                        onClick={() => addParagraph(index)}
                        className="admin-events-add-paragraph-btn"
                      >
                        Add Paragraph
                      </button>
                    </div>

                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <div
                        key={`paragraph-section-${index}-paragraph-${paragraphIndex}`}
                        className="admin-events-paragraph-item"
                      >
                        <label>
                          Para {paragraphIndex + 1}
                          <textarea
                            value={paragraph}
                            onChange={(event) =>
                              handleParagraphChange(index, paragraphIndex, event.target.value)
                            }
                            placeholder={`Paragraph ${paragraphIndex + 1}`}
                            rows={3}
                            required
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => removeParagraph(index, paragraphIndex)}
                          disabled={section.paragraphs.length === 1}
                          className="admin-events-remove-paragraph-btn"
                        >
                          Remove Paragraph
                        </button>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="admin-events-section-group">
              <div className="admin-events-sections-title-row">
                <h2>Image Sections</h2>
                <button type="button" onClick={addImageSection} className="admin-events-add-section-btn">
                  Add Image Section
                </button>
              </div>

              {!formData.imageSections.length && (
                <p className="admin-events-muted">No image sections added.</p>
              )}

              {formData.imageSections.map((section, index) => {
                const selectedImageInputMode = section.inputMode === 'link' ? 'link' : 'upload';

                return (
                  <article className="admin-events-section-card" key={`image-section-${index}`}>
                    <div className="admin-events-section-head">
                      <h3>Image Section:{index + 1}</h3>
                      <button
                        type="button"
                        onClick={() => removeImageSection(index)}
                        className="admin-events-remove-btn"
                      >
                        Remove
                      </button>
                    </div>

                    <div
                      className="admin-events-image-mode"
                      role="group"
                      aria-label={`Image section ${index + 1} source`}
                    >
                      <button
                        type="button"
                        className={`admin-events-image-mode-btn ${
                          selectedImageInputMode === 'upload' ? 'admin-events-image-mode-btn-active' : ''
                        }`}
                        onClick={() => handleImageSectionModeChange(index, 'upload')}
                      >
                        Choose From Gallery
                      </button>
                      <button
                        type="button"
                        className={`admin-events-image-mode-btn ${
                          selectedImageInputMode === 'link' ? 'admin-events-image-mode-btn-active' : ''
                        }`}
                        onClick={() => handleImageSectionModeChange(index, 'link')}
                      >
                        Use Image Link
                      </button>
                    </div>

                    <p className="admin-events-image-mode-note">Only one option is needed.</p>

                    {selectedImageInputMode === 'upload' && (
                      <label>
                        Upload Image File
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(event) => handleImageFileChange(index, event)}
                        />
                      </label>
                    )}

                    {uploadingImageSectionIndex === index && (
                      <p className="admin-events-uploading">Uploading image to Cloudinary...</p>
                    )}

                    {selectedImageInputMode === 'upload' && section.image && (
                      <p className="admin-events-uploading">Image selected from gallery and ready.</p>
                    )}

                    {selectedImageInputMode === 'link' && (
                      <label>
                        Image URL
                        <input
                          type="url"
                          value={section.image}
                          onChange={(event) => handleImageSectionChange(index, event.target.value)}
                          placeholder="https://..."
                        />
                      </label>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          {error && <p className="admin-events-status admin-events-status-error">{error}</p>}
          {message && <p className="admin-events-status admin-events-status-success">{message}</p>}

          <div className="admin-events-form-actions">
            <button type="submit" disabled={isSaving}>
              {isSaving ? 'Saving...' : editingId ? 'Update Event' : 'Create Event'}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="admin-events-cancel-btn">
                Cancel Edit
              </button>
            )}
          </div>
        </form>

        <section className="admin-events-list" aria-label="Existing events list">
          <h2>Existing Events</h2>

          {isLoading && <p className="admin-events-muted">Loading events...</p>}
          {!isLoading && !events.length && <p className="admin-events-muted">No events added yet.</p>}

          {!isLoading &&
            events.map((eventItem) => (
              <article key={eventItem._id} className="admin-events-list-item">
                <h3>{eventItem.title}</h3>
                <p>
                  {eventItem.date} | {eventItem.time} | {eventItem.location}
                </p>
                <p>Sections: {eventItem.sections?.length || 0}</p>
                <div className="admin-events-list-actions">
                  <button type="button" onClick={() => startEdit(eventItem)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(eventItem._id)}
                    className="admin-events-delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default AdminEventsManager;
