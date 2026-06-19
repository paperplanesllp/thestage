import EventDetail from "../eventspage/events_components/EventDetail";

const EventsHero = () => {
  return (
    <section className="flex min-h-[280px] items-center justify-center bg-black px-4 pt-16 text-white sm:min-h-[340px]">
      <h1 className="logo-font text-center text-5xl sm:text-6xl md:text-7xl">
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
