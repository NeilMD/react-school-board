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
    <div className="max-w-md">
      {events.map((event, index) => (
        <div
          key={index}
          className="flex cursor-pointer gap-3 rounded-2xl px-4 py-2 transition duration-300 ease-in-out hover:bg-(--color-home)">
          <div className="text-center">
            <div className="font-regular text-sm text-gray-500">
              {event.month}
            </div>
            <div className="text-3xl font-semibold text-black">{event.day}</div>
          </div>
          <div className="flex-1 border-l pl-4">
            <h3 className="text-xs font-semibold text-cyan-600">
              {event.title}
            </h3>
            <div className="mt-1 flex items-center gap-1 text-xs font-light text-gray-600">
              <MdAccessTime className="text-gray-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-light text-gray-600">
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
