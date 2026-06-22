import EventDetail from "../eventspage/events_components/EventDetail";

const EventsHero = () => {
  return (
    <section className="flex min-h-[220px] items-center justify-center bg-white px-4 pt-28 text-black">
      <h1 className="logo-font text-center text-[2.2rem] leading-[0.95] sm:text-[3.4rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem]">
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
