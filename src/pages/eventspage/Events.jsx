import EventDetail from "../eventspage/events_components/EventDetail";

const EventsHero = () => {
  return (
    <section className="flex min-h-[220px] items-center justify-center bg-white px-4 pt-16 text-black">
      <h1 className="logo-font -translate-y-5 text-center text-5xl sm:text-6xl md:text-7xl">
        TheStage Events
      </h1>
    </section>
  );
};

const Events = () => {
  return (
    <>
      <EventsHero />
      <EventDetail />
    </>
  );
};

export default Events;
