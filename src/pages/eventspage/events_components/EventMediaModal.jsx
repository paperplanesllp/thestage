import { useEffect, useState } from "react";

const EventMediaModal = ({ event, onClose }) => {
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/admin/public-events/${event.id}`);
        const data = await response.json();
        
        if (data.success && data.event) {
          setEventDetails(data.event);
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (event?.id) {
      fetchEventDetails();
    }
  }, [event?.id]);

  const getMediaFromSections = () => {
    const images = [];
    const videos = [];

    if (eventDetails?.sections && Array.isArray(eventDetails.sections)) {
      eventDetails.sections.forEach(section => {
        if (section.type === 'image' && section.image) {
          images.push(section.image);
        }
        if (section.type === 'video' && section.video) {
          videos.push(section.video);
        }
      });
    }

    return { images, videos };
  };

  const { images, videos } = getMediaFromSections();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "Gordita, sans-serif" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Event Header */}
          <div className="mb-6">
            <h2
              className="mb-2 text-2xl font-bold text-black"
              style={{ fontFamily: "'Scope One', serif" }}
            >
              {event.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>{event.date} - {event.day}</span>
              <span>{event.time}</span>
              <span>{event.venue}</span>
              {event.category && (
                <span className="rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-900">
                  {event.category}
                </span>
              )}
            </div>
            {event.description && (
              <p className="mt-4 text-gray-700">{event.description}</p>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-8 text-center text-gray-500">
              Loading event media...
            </div>
          )}

          {/* No Media */}
          {!loading && images.length === 0 && videos.length === 0 && (
            <div className="py-8 text-center text-gray-500">
              No media available for this event yet.
            </div>
          )}

          {/* Images */}
          {!loading && images.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold text-black">
                Photos ({images.length})
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-gray-100"
                  >
                    <img
                      src={image}
                      alt={`Event photo ${index + 1}`}
                      className="h-64 w-full object-cover hover:scale-105 transition"
                      onError={(e) => {
                        e.target.src = '/placeholder-image.png';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {!loading && videos.length > 0 && (
            <div>
              <h3 className="mb-4 text-lg font-semibold text-black">
                Videos ({videos.length})
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-gray-100"
                  >
                    <video
                      controls
                      className="h-64 w-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    >
                      <source src={video} />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventMediaModal;
