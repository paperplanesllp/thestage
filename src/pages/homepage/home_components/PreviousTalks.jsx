import React, { useEffect, useState } from "react";

const PreviousTalks = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcomingEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/admin/public-events");
        
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        
        if (data.success && Array.isArray(data.events) && data.events.length > 0) {
          // Get current date/time for comparison
          const now = new Date();
          
          // Filter only upcoming events (date is in the future)
          const upcomingEvents = data.events
            .filter(event => {
              const eventDate = new Date(event.date);
              return eventDate > now;
            })
            .sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateA - dateB;
            });
          
          // Get the nearest/next upcoming event
          if (upcomingEvents.length > 0) {
            const nextEvent = upcomingEvents[0];
            const imageUrl = nextEvent.sections?.find(s => s.type === 'image')?.image || "";
            const paragraphs = nextEvent.sections?.find(s => s.type === 'paragraphs')?.paragraphs || [];
            
            setEvent({
              title: nextEvent.title,
              date: nextEvent.date,
              time: nextEvent.time,
              location: nextEvent.location,
              paragraphs: paragraphs,
              image: imageUrl,
            });
          }
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvent();
  }, []);

  if (loading) {
    return <div className="w-full bg-white py-20 text-center">Loading upcoming events...</div>;
  }

  if (error || !event) {
    return null;
  }

  // Format date
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <section
      className="w-full overflow-hidden bg-white"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      {/* HEADING */}
      <div className="px-4 pt-3 pb-2 sm:px-6 md:px-10 lg:px-12">
        <h1 className="text-2xl leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
          UPCOMINGS EVENTS
        </h1>

        <p
          className="mt-3 max-w-2xl text-[14px] leading-6 text-black sm:text-[15px] md:text-[16px] lg:text-[17px]"
          style={{ fontFamily: "'Scope One', serif" }}
        >
          Explore upcoming events at The Stage, where ideas are examined
          carefully, assumptions questioned, and understanding deepened through
          reasoned discussion.
        </p>
      </div>

      {/* HERO SECTION */}
      <div className="relative mt-0 min-h-[550px] w-full overflow-hidden sm:min-h-[600px] md:min-h-[800px]">
        {/* BACKGROUND IMAGE */}
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover object-center md:object-[50%_80%]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[550px] items-start sm:min-h-[600px] md:min-h-[800px]">
          <div className="flex w-full flex-col gap-4 px-4 pt-4 text-white sm:px-6 sm:pt-6 md:w-[75%] md:px-10 md:pt-8 lg:w-[60%] lg:px-12">
            <h1 className="max-w-4xl text-[26px] font-semibold leading-tight tracking-wide sm:text-3xl md:text-5xl lg:text-6xl">
              {event.title}
            </h1>

            {event.paragraphs && event.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{ fontFamily: "'Scope One', serif" }}
                className={`max-w-full text-[14px] font-bold leading-6 sm:max-w-[90%] sm:text-[15px] md:max-w-[520px] ${index === 0 ? 'pt-6 md:pt-24 lg:pt-40' : 'pt-4'}`}
              >
                {paragraph}
              </p>
            ))}

            {/* INFO */}
            <div className="mt-4 text-sm sm:mt-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
                <div>
                  <p className="text-sm font-semibold sm:text-base">Date</p>
                  <p className="text-sm sm:text-base">{formattedDate}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold sm:text-base">Time</p>
                  <p className="whitespace-nowrap text-sm sm:text-base">
                    {event.time}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold sm:text-base">Venue</p>
                  <p className="text-sm leading-6 sm:text-base">
                    {event.location}
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="mt-14 sm:mt-16 md:mt-8 relative inline-block w-fit pb-10 text-sm after:absolute  after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full sm:text-base"
              >
          Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousTalks;