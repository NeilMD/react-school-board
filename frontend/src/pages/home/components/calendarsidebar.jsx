import React from "react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import UpcomingEvents from "@/pages/home/components/upcomingEvents";

function CalendarSideBar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="home-card px-6 pt-4 pb-8 text-[20px] font-bold text-cyan-600">
      <h5>Calendar</h5>
      <Separator className="mt-2 mb-6 bg-cyan-600" />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border border-gray-500 font-light text-gray-700"
      />
      <h5 className="mt-6">Upcoming Events</h5>
      <Separator className="mt-2 mb-6 bg-cyan-600" />
      <UpcomingEvents></UpcomingEvents>
    </div>
  );
}

export default CalendarSideBar;
