import { useState } from "react";
import { useNavigate } from "react-router-dom";

const filters = [
  { id: "upcoming", label: "Upcoming" },
  { id: "month", label: "This Month" },
  { id: "monologic", label: "Monologic" },
  { id: "dialogic", label: "Dialogic" },
];

const data = {
  upcoming: [
    {
      date: "23-01-2026",
      day: "Sunday",
      time: "16:00",
      title: "Excursion on the Roof",
      description:
        "A guided theatrical excursion offering a unique behind-the-scenes experience of the stage and its history.",
      status: "sold",
    },
    {
      date: "24-01-2026",
      day: "Monday",
      time: "18:30",
      title: "Women’s Monologues",
      description:
        "A powerful collection of monologues exploring emotions, stories, and voices of women across generations.",
      status: "available",
    },
  ],

  month: [
    {
      date: "2",
      day: "Tuesday",
      time: "17:00",
      title: "Khanuma",
      description:
        "A lively musical comedy filled with humor, romance, and traditional theatrical charm.",
      status: "available",
    },
  ],

  monologic: [
    {
      date: "3",
      day: "Wednesday",
      time: "18:30",
      title: "Women’s Monologues",
      description:
        "An intimate monologic performance focusing on personal narratives and emotional depth.",
      status: "available",
    },
  ],

  dialogic: [
    {
      date: "2",
      day: "Thursday",
      time: "20:00",
      title: "The Little Mermaid",
      description:
        "A magical dialogic performance reimagining the classic tale through expressive stage interaction.",
      status: "sold",
    },
  ],
};


const EventDetail = () => {
  const [activeFilter, setActiveFilter] = useState("upcoming");
const navigate=useNavigate()
  return (
    <section className="max-w-8xl flex flex-col items-center mx-auto px-6 "style={{ fontFamily: "Gordita, sans-serif" }}>
      
      {/* ===== FILTER PILLS ===== */}
      <div className="flex gap-8 mt-15 mb-10">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                activeFilter === filter.id
                  ? "bg-[#8C3917] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* ===== EVENT LIST ===== */}
      <div className="w-[90%]">
        {data[activeFilter].map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center w-full justify-around bg-white text-black px-6 py-6
                       border-t border-b border-gray-200"
          >
            {/* DATE */}
            <div className="w-40 text-center">
              <div className="text-2xl font-normal">{item.date}</div>
              <div className="text-sm text-gray-500">{item.day}</div>
            </div>

            {/* TIME */}
            <div className="w-24 text-xl font-normal">
              {item.time}
            </div>

            {/* TITLE */}
            <div className=" text-xl font-medium">
              {item.title}

              <p className="mt-1 w-75 text-sm text-gray-600 line-clamp-3">
    {item.description}
  </p>
            </div>

            {/* ACTION */}
            <div>
            
                <button onClick={()=>navigate('/event_attend')} className="bg-white border-black border-2 hover:border-transparent text-black hover:bg-[#8C3917] hover:text-white  px-6 py-2 rounded-full text-sm">
                  Attend
                </button>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventDetail;
