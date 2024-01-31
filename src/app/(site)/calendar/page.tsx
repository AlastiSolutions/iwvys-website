import EventsCalendar from "@/components/calendar/Calendar";
import React from "react";

const CalendarPage = () => {
    return <div className=" min-w-[80vw] w-full min-h-[100vh] h-full flex flex-col items-center ">
        <h1 className="text-2xl font-bold mb-6 mt-6"> IWVYS Events Calendar </h1>
        <EventsCalendar />
    </div>;
};

export default CalendarPage;
