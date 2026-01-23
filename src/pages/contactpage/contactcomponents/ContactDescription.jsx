import { useState } from "react";

const filters = [
  { id: "upcoming", label: "Upcoming" },
  { id: "month", label: "This Month" },
  { id: "monologic", label: "Monologic" },
  { id: "dialogic", label: "Dialogic" },
];

const data = {
  upcoming: [
    { time: "16:00", title: "Excursion on the Roof", status: "sold" },
    { time: "18:30", title: "Women’s Monologues", status: "available" },
  ],
  month: [
    { time: "17:00", title: "Khanuma", status: "available" },
  ],
  monologic: [
    { time: "18:30", title: "Women’s Monologues", status: "available" },
  ],
  dialogic: [
    { time: "20:00", title: "The Little Mermaid", status: "sold" },
  ],
};

const ScheduleSection = () => {
  const [activeFilter, setActiveFilter] = useState("upcoming");

  return (
    <section className="max-w-5xl mx-auto px-6 py-10 text-white">
      
      {/* ===== FILTER PILLS ===== */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                activeFilter === filter.id
                  ? "bg-red-600 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* ===== CONDITIONAL CONTENT ===== */}
      <div className="space-y-4">
        {data[activeFilter].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-neutral-900 rounded-lg px-6 py-4"
          >
            <div className="flex items-center gap-6">
              <span className="text-lg font-semibold">{item.time}</span>
              <span className="text-neutral-300">{item.title}</span>
            </div>

            {item.status === "available" ? (
              <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full text-sm">
                Buy Ticket
              </button>
            ) : (
              <span className="text-neutral-500 text-sm">
                Tickets Sold Out
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleSection;
