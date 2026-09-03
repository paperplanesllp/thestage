import { useState, useEffect } from "react";
import EventMediaModal from "./EventMediaModal";
import { getEventDayEnd, isUpcomingEventDate, parseEventDate } from "../../../utils/eventDate";

const filters = [
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past Events" },
  { id: "month", label: "This Month" },
  { id: "discourse", label: "Discourse" },
  { id: "monologic", label: "Debates" },
  { id: "dialogic", label: "Lectures" },
  { id: "panel", label: "Panel" },
  { id: "gallery", label: "Gallery" },
];

const localGalleryImages = [
  "sii.jpeg",
  "IMG_1799.jpg",
  "IMG_0444.jpg",
  "IMG_6295.jpeg",
  "IMG_1781.jpg",
  "IMG_7237.JPG.jpeg",
  "IMG_0536.jpg",
  "IMG_2823.jpeg",
  "preethi-1.jpg.jpeg",
  "st 3rd ed.jpg.jpeg",
  "jimmy & si.jpg.jpeg",
  "manju.jpg.jpeg",
  "IMG_3639.jpg.jpeg",
  "IMG_0423.jpg",
  "IMG-20260425-WA0059.jpg.jpeg",
  "IMG-20260425-WA0044.jpg.jpeg",
  "IMG_7200.JPG.jpeg",
  "IMG_0468.jpg",
  "IMG_0489.jpg",
  "IMG_0503.jpg",
  "IMG_0526.jpg",
  "IMG_0619.jpg",
  "IMG_1713.jpg",
  "IMG-20260425-WA0013.jpg.jpeg",
  "IMG_6137.jpeg",
  "IMG_6217.jpeg",
  "IMG_6303.jpeg",
  "IMG_8504.jpg",
  "IMG_8508.jpg",
  "IMG_3622.jpg",
  "IMG_3346.jpg",
  "IMG_3214.jpg",
  "IMG_5398.jpg",
  "IMG_4696.jpg",
  "IMG_4715.jpg",
].map((fileName, index) => ({
  id: `local-gallery-${index}`,
  image: `/${fileName}`,
  title: "The Stage Gallery",
  date: "",
}));

const EventDetail = () => {
  const [activeFilter, setActiveFilter] = useState("upcoming");
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/admin/public-events");

        if (!response.ok) {
          setAllEvents([]);
          return;
        }

        const data = await response.json();

        if (data.success && Array.isArray(data.events)) {
          const formattedEvents = data.events.map(event => {
            const description =
              event.sections?.find(s => s.type === "paragraphs")?.paragraphs?.[0] || "";

            const formLink =
              event.sections?.find(
                s => String(s?.type || "").toLowerCase() === "googleform"
              )?.formLink || "";

            const eventDate = parseEventDate(event.date);
            const eventDayEnd = getEventDayEnd(event.date);
            const dayName = eventDate
              ? eventDate.toLocaleDateString("en-US", {
                  weekday: "long",
                })
              : "";

            return {
              id: event._id,
              date: event.date,
              day: dayName,
              time: event.time,
              venue: event.location,
              title: event.title,
              description,
              formLink,
              category: event.category || "",
              rawDate: eventDate,
              eventDayEnd,
              images: (event.sections || [])
                .filter(section => section.type === "image" && section.image)
                .map(section => section.image),
            };
          }).filter(event => event.rawDate);

          setAllEvents(formattedEvents);
        } else {
          setAllEvents([]);
        }
      } catch {
        setAllEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const isEventPassed = eventDate => {
    return !isUpcomingEventDate(eventDate);
  };

  const getFilteredEvents = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    switch (activeFilter) {
      case "upcoming":
        return allEvents
          .filter(event => event.eventDayEnd >= now)
          .sort((a, b) => a.rawDate - b.rawDate);

      case "past":
        return allEvents
          .filter(event => event.eventDayEnd < now)
          .sort((a, b) => b.rawDate - a.rawDate);

      case "month":
        return allEvents
          .filter(
            event =>
              event.rawDate.getMonth() === currentMonth &&
              event.rawDate.getFullYear() === currentYear
          )
          .sort((a, b) => a.rawDate - b.rawDate);

      case "discourse":
      case "monologic":
      case "dialogic":
      case "panel":
        return allEvents
          .filter(event => event.category === activeFilter)
          .sort((a, b) => a.rawDate - b.rawDate);

      default:
        return [];
    }
  };

  const filteredEvents = getFilteredEvents();
  const galleryImages = [
    ...localGalleryImages,
    ...allEvents.flatMap(event =>
      event.images.map((image, index) => ({
        id: `${event.id}-${index}`,
        image,
        title: event.title,
        date: event.date,
      }))
    ),
  ];

  return (
    <section
      className="max-w-8xl mx-auto flex min-h-[620px] flex-col items-center px-4 pt-12 pb-24 sm:px-6"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      {/* FILTER PILLS */}
      <div className="mb-12 flex translate-y-6 flex-wrap justify-center gap-3 sm:gap-5">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition sm:px-6 sm:py-3 sm:text-base ${
              activeFilter === filter.id
                ? "bg-[#8C3917] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* EVENT GALLERY */}
      {activeFilter === "gallery" ? (
        <div className="mb-24 w-full md:w-[95%]">
          {loading ? (
            <div className="py-12 text-center text-lg text-gray-500">
              Loading gallery...
            </div>
          ) : galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {galleryImages.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedGalleryImage(item)}
                  className="group overflow-hidden rounded-xl bg-gray-100 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8C3917]"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} gallery photo`}
                    className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="bg-white px-4 py-3">
                    <p className="truncate font-semibold text-black">{item.title}</p>
                    {item.date && <p className="mt-1 text-sm text-gray-500">{item.date}</p>}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-lg text-gray-500">
              No images have been added to the gallery yet.
            </div>
          )}
        </div>
      ) : (
      /* EVENT LIST */
      <div className="mb-24 w-full md:w-[95%]">
        {loading ? (
          <div className="py-12 text-center text-lg text-gray-500">
            Loading events...
          </div>
        ) : filteredEvents.length > 0 ? (
          filteredEvents.map(item => (
            <div
              key={item.id}
              onClick={() => {
                if (activeFilter === "past" || isEventPassed(item.date)) {
                  setSelectedEvent(item);
                  setIsModalOpen(true);
                }
              }}
              className={`grid w-full grid-cols-1 gap-5 border-y border-gray-200 bg-white px-4 py-6 text-black sm:px-6 md:grid-cols-[1fr_1fr_1.5fr_2.5fr_140px] md:items-center md:gap-4 ${
                activeFilter === "past" || isEventPassed(item.date) ? "cursor-pointer hover:bg-gray-50" : ""
              }`}
            >
              {/* DATE */}
              <div className="text-center md:text-left">
                <div className="text-sm font-semibold md:pt-6">
                  {item.date}
                </div>
                <div className="text-sm text-gray-500">{item.day}</div>
              </div>

              {/* TIME */}
              <div className="text-center text-sm md:flex md:items-center md:text-left">
                {item.time}
              </div>

              {/* VENUE */}
              <div className="text-center text-sm md:flex md:items-center md:text-left">
                {item.venue}
              </div>

              {/* TITLE + DESCRIPTION */}
              <div className="max-w-full text-center md:max-w-[600px] md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start md:gap-3">
                  <h2
                    className="text-base font-semibold sm:text-lg break-words line-clamp-2"
                    style={{ fontFamily: "'Scope One', serif" }}
                  >
                    {item.title}
                  </h2>

                  {item.category && (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
                      {item.category}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>

              {/* ACTION (FIXED) */}
              <div className="flex items-center justify-center md:justify-end min-w-[130px]">
                {activeFilter === "past" || isEventPassed(item.date) ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(item);
                      setIsModalOpen(true);
                    }}
                    className="whitespace-nowrap rounded-full border-2 border-black bg-white text-black px-6 py-2 text-sm hover:border-transparent hover:bg-[#8C3917] hover:text-white transition"
                  >
                    View Media
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      item.formLink &&
                      window.open(item.formLink, "_blank", "noopener,noreferrer")
                    }
                    disabled={!item.formLink}
                    className={`whitespace-nowrap rounded-full border-2 px-6 py-2 text-sm transition ${
                      item.formLink
                        ? "border-black bg-white text-black hover:border-transparent hover:bg-[#8C3917] hover:text-white"
                        : "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500"
                    }`}
                  >
                    {item.formLink ? "Attend" : "Form Unavailable"}
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 text-center text-lg text-gray-500">
            No events available
          </div>
        )}
      </div>
      )}

      {isModalOpen && selectedEvent && (
        <EventMediaModal 
          event={selectedEvent} 
          onClose={() => {
            setIsModalOpen(false);
            setSelectedEvent(null);
          }} 
        />
      )}

      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedGalleryImage(null)}
          role="presentation"
        >
          <div className="relative max-h-[90vh] max-w-5xl" onClick={event => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedGalleryImage(null)}
              aria-label="Close image preview"
              className="absolute -right-2 -top-10 text-3xl leading-none text-white hover:text-gray-300"
            >
              ×
            </button>
            <img
              src={selectedGalleryImage.image}
              alt={`${selectedGalleryImage.title} gallery photo`}
              className="max-h-[82vh] max-w-full rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-white">
              {selectedGalleryImage.title} · {selectedGalleryImage.date}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetail;
