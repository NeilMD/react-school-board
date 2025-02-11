import React from "react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

function CalendarSideBar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="home-card px-6 pt-4 pb-8">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border border-gray-500 font-light text-gray-500"
      />
    </div>
  );
}

export default CalendarSideBar;
