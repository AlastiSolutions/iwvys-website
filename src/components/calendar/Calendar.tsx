'use client';

import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Calendar as BigCalendar, Views, View, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const DUMMY_EVENT = [{ id: 0, title: "Test", start: new Date(2024, 1, 1), end: new Date(2024, 1, 1), allDay: true }, { id: 1, title: "Wow", start: new Date(2024, 1, 1), end: new Date(2024, 1, 1), allDay: true }, { id: 2, title: "Work", start: new Date(2024, 1, 1), end: new Date(2024, 1, 1), allDay: true }];

const localizer = momentLocalizer(moment);

const EventsCalendar = () => {
    const [calendarView, setCalendarView] = useState<View>(Views.MONTH);
    const [date, setDate] = useState<Date>();

    const { defaultDate, min, max } = useMemo(() => {
        return {
            defaultDate: new Date(),
            min: new Date(2022, 0, 1, 7, 0, 0),
            max: new Date(2030, 11, 31, 22, 0, 0),
        }
    }, [])

    useEffect(() => {
        setDate(defaultDate);
    }, [defaultDate]);

    const onNavigate = useCallback((newDate: Date) => {
        setDate(newDate);
    }, [])

    const onChangeView = useCallback((newView: View) => setCalendarView(newView), [setCalendarView])

    return <div className='min-h-[55vh] h-[60vh] min-w-[45vw] w-[45vw'>
        <BigCalendar localizer={localizer} events={DUMMY_EVENT} startAccessor="start" endAccessor="end" defaultDate={defaultDate} min={min} max={max} date={date} onView={onChangeView} view={calendarView} views={['month', 'week']} showAllEvents={false} step={30} toolbar={true} onNavigate={onNavigate} popup popupOffset={10} />
    </div>
}

export default EventsCalendar;
