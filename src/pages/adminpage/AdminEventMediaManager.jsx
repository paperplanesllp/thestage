import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminEventsManager.css';

const MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024; // 100MB for videos

const AdminEventMediaManager = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isUploadingVideo, setIsUploadingVideo] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [videoLink, setVideoLink] = useState('');

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

      // Filter to show only past events
      const now = new Date();
      const pastEvents = (data.events || []).filter(event => new Date(event.date) < now);
      setEvents(pastEvents);
    } catch {
      setError('Unable to connect to server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !selectedEvent) return;

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError('File size exceeds 100MB limit.');
      return;
    }

    try {
      setIsUploadingImage(true);
      setError('');
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        headers: adminSessionHeaders,
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Unable to upload image.');
        return;
      }

      setImageLink(data.url);
      setMessage('Image uploaded successfully. Click "Add Image to Event" to add it.');
    } catch (err) {
      setError('Failed to upload image.');
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !selectedEvent) return;

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError('File size exceeds 100MB limit.');
      return;
    }

    try {
      setIsUploadingVideo(true);
      setError('');
      const formData = new FormData();
      formData.append('video', file);

      const response = await fetch('/api/admin/upload-video', {
        method: 'POST',
        headers: adminSessionHeaders,
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Unable to upload video.');
        return;
      }

      setVideoLink(data.url);
      setMessage('Video uploaded successfully. Click "Add Video to Event" to add it.');
    } catch (err) {
      setError('Failed to upload video.');
    } finally {
      setIsUploadingVideo(false);
    }
  };

  const addMediaToEvent = async (mediaUrl, mediaType) => {
    if (!selectedEvent || !mediaUrl) return;

    try {
      setIsSaving(true);
      setError('');

      const response = await fetch(`/api/admin/events/${selectedEvent._id}/add-media`, {
        method: 'POST',
        headers: sessionHeaders,
        body: JSON.stringify({
          mediaUrl,
          mediaType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Unable to add media to event.');
        return;
      }

      setMessage(`${mediaType} added to event successfully!`);
      if (mediaType === 'image') {
        setImageLink('');
      } else {
        setVideoLink('');
      }
      setSelectedEvent(data.event);
    } catch (err) {
      setError('Failed to add media to event.');
    } finally {
      setIsSaving(false);
    }
  };

  const removeMediaFromEvent = async (mediaIndex) => {
    if (!selectedEvent) return;

    try {
      setIsSaving(true);
      setError('');

      const response = await fetch(
        `/api/admin/events/${selectedEvent._id}/media/${mediaIndex}`,
        {
          method: 'DELETE',
          headers: sessionHeaders,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Unable to remove media from event.');
        return;
      }

      setMessage('Media removed from event successfully!');
      setSelectedEvent(data.event);
    } catch (err) {
      setError('Failed to remove media from event.');
    } finally {
      setIsSaving(false);
    }
  };

  const getEventMedia = () => {
    if (!selectedEvent?.sections) return { images: [], videos: [] };

    const images = [];
    const videos = [];

    selectedEvent.sections.forEach((section, index) => {
      if (section.type === 'image' && section.image) {
        images.push({ url: section.image, index });
      }
      if (section.type === 'video' && section.video) {
        videos.push({ url: section.video, index });
      }
    });

    return { images, videos };
  };

  const media = getEventMedia();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8" style={{ fontFamily: 'Gordita, sans-serif' }}>
      {/* Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-black">Manage Event Media</h1>
        <Link
          to="/admin"
          className="rounded-lg border-2 border-black bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition"
        >
          Back to Dashboard
        </Link>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 rounded-lg border-2 border-red-500 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Success Message */}
      {message && (
        <div className="mb-6 rounded-lg border-2 border-green-500 bg-green-50 p-4 text-green-700">
          {message}
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        {/* Events List */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-semibold text-black">Past Events</h2>
          {isLoading ? (
            <div className="text-center text-gray-500">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="text-center text-gray-500">No past events found.</div>
          ) : (
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {events.map(event => (
                <button
                  key={event._id}
                  onClick={() => setSelectedEvent(event)}
                  className={`w-full rounded-lg p-3 text-left transition ${
                    selectedEvent?._id === event._id
                      ? 'bg-[#8C3917] text-white'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  <div className="font-semibold">{event.title}</div>
                  <div className="text-xs opacity-75">{event.date}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Media Management */}
        {selectedEvent && (
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-lg font-semibold text-black">
              Media for: {selectedEvent.title}
            </h2>

            {/* Upload Image */}
            <div className="mb-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUploadingImage}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-[#8C3917] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-amber-900"
                />
              </div>

              {imageLink && (
                <div className="flex gap-2">
                  <button
                    onClick={() => addMediaToEvent(imageLink, 'image')}
                    disabled={isSaving}
                    className="flex-1 rounded-lg bg-[#8C3917] px-4 py-2 text-sm font-semibold text-white hover:bg-amber-900 transition disabled:opacity-50"
                  >
                    {isSaving ? 'Adding...' : 'Add Image to Event'}
                  </button>
                  <button
                    onClick={() => setImageLink('')}
                    className="rounded-lg border-2 border-gray-300 px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>

            {/* Upload Video */}
            <div className="mb-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Upload Video
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  disabled={isUploadingVideo}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-[#8C3917] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-amber-900"
                />
              </div>

              {videoLink && (
                <div className="flex gap-2">
                  <button
                    onClick={() => addMediaToEvent(videoLink, 'video')}
                    disabled={isSaving}
                    className="flex-1 rounded-lg bg-[#8C3917] px-4 py-2 text-sm font-semibold text-white hover:bg-amber-900 transition disabled:opacity-50"
                  >
                    {isSaving ? 'Adding...' : 'Add Video to Event'}
                  </button>
                  <button
                    onClick={() => setVideoLink('')}
                    className="rounded-lg border-2 border-gray-300 px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>

            {/* Current Media */}
            {media.images.length > 0 && (
              <div className="mb-8">
                <h3 className="mb-4 font-semibold text-black">Images ({media.images.length})</h3>
                <div className="grid grid-cols-2 gap-4">
                  {media.images.map(({ url, index }) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt="Event media"
                        className="w-full h-40 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = '/placeholder-image.png';
                        }}
                      />
                      <button
                        onClick={() => removeMediaFromEvent(index)}
                        disabled={isSaving}
                        className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition disabled:opacity-50"
                      >
                        <span className="text-white font-semibold">Remove</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {media.videos.length > 0 && (
              <div>
                <h3 className="mb-4 font-semibold text-black">Videos ({media.videos.length})</h3>
                <div className="grid grid-cols-2 gap-4">
                  {media.videos.map(({ url, index }) => (
                    <div key={index} className="relative group">
                      <video
                        src={url}
                        className="w-full h-40 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <button
                        onClick={() => removeMediaFromEvent(index)}
                        disabled={isSaving}
                        className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition disabled:opacity-50"
                      >
                        <span className="text-white font-semibold">Remove</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {media.images.length === 0 && media.videos.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No media uploaded yet for this event.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEventMediaManager;
