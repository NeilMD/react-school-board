import React, { useEffect, useState } from "react";
import { MdAccessTime, MdLocationOn } from "react-icons/md";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data/upcomingEvents.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Failed to fetch events:", err));
  }, []);

  return (
    <div className="p-4 max-w-md">
      {events.map((event, index) => (
        <div key={index} className="flex gap-3 mb-4">
          <div className="text-center">
            <div className="text-[18px] text-gray-500">{event.month}</div>
            <div className="text-[36px] font-semibold text-black">{event.day}</div>
          </div>
          <div className="border-l pl-4 flex-1">
            <h3 className="text-cyan-600 font-semibold">{event.title}</h3>
            <div className="text-[18px] text-gray-600 flex items-center gap-1 mt-1 font-light">
              <MdAccessTime className="text-gray-400" />
              <span>{event.time}</span>
            </div>
            <div className="text-[18px] text-gray-600 flex items-center gap-1 font-light">
              <MdLocationOn className="text-gray-400" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
