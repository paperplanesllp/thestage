import { useState, useEffect } from "react";
import EventMediaModal from "./EventMediaModal";
import { getEventEndDateTime } from "../../../utils/eventDateTime";

const filters = [
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past Events" },
  { id: "month", label: "This Month" },
  { id: "discourse", label: "Discourse" },
  { id: "monologic", label: "Monologic" },
  { id: "dialogic", label: "Dialogic" },
  { id: "panel", label: "Panel" },
];

const EventDetail = () => {
  const [activeFilter, setActiveFilter] = useState("upcoming");
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

            const eventDate = new Date(event.date);
            const endDateTime = getEventEndDateTime(event.date, event.time);
            const dayName = eventDate.toLocaleDateString("en-US", {
              weekday: "long",
            });

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
              endDateTime,
            };
          });

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

  const isEventPassed = event => {
    return event.endDateTime ? event.endDateTime <= new Date() : false;
  };

  const getFilteredEvents = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    switch (activeFilter) {
      case "upcoming":
        return allEvents
          .filter(event => !isEventPassed(event))
          .sort((a, b) => (a.endDateTime || a.rawDate) - (b.endDateTime || b.rawDate));

      case "past":
        return allEvents
          .filter(isEventPassed)
          .sort((a, b) => (b.endDateTime || b.rawDate) - (a.endDateTime || a.rawDate));

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

  return (
    <section
      className="max-w-8xl mx-auto flex flex-col items-center px-4 sm:px-6"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      {/* FILTER PILLS */}
      <div className="mb-8 flex flex-wrap justify-center gap-3 sm:gap-4">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 ${
              activeFilter === filter.id
                ? "bg-[#8C3917] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* EVENT LIST */}
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
                if (isEventPassed(item)) {
                  setSelectedEvent(item);
                  setIsModalOpen(true);
                }
              }}
              className={`grid w-full grid-cols-1 gap-5 border-y border-gray-200 bg-white px-4 py-6 text-black sm:px-6 md:grid-cols-[1fr_1fr_1.5fr_2.5fr_140px] md:items-center md:gap-4 ${
                isEventPassed(item) ? "cursor-pointer hover:bg-gray-50" : ""
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
                {isEventPassed(item) ? (
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

      {isModalOpen && selectedEvent && (
        <EventMediaModal 
          event={selectedEvent} 
          onClose={() => {
            setIsModalOpen(false);
            setSelectedEvent(null);
          }} 
        />
      )}
    </section>
  );
};

export default EventDetail;
