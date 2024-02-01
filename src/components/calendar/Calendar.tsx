'use client';

import React, { useCallback, useMemo, useState, useEffect, SetStateAction } from 'react';
import { Calendar as BigCalendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Event } from '@/constants/data.types';

const DUMMY_EVENTS: Event[] =
    [{ title: 'Test', startDate: new Date().toISOString(), endDate: new Date().toISOString(), isAllDay: false, description: 'test', location: 'test' }]

const DUMMY_EVENT = [{ title: "Test", start: new Date().toISOString(), end: new Date().toISOString() }];

const localizer = momentLocalizer(moment);

const EventsCalendar = () => {
    const [calendarView, setCalendarView] = useState(Views.MONTH);
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

    const onChangeView = useCallback((newView) => setCalendarView(newView), [setCalendarView])

    return <div className='min-h-[55vh] h-[60vh] min-w-[45vw] w-[45vw'>
        <BigCalendar localizer={localizer} events={[]} startAccessor="start" endAccessor="end" defaultDate={defaultDate} min={min} max={max} date={date} onView={onChangeView} view={calendarView} views={['month', 'week']} showAllEvents={false} step={30} toolbar={true} onNavigate={onNavigate} />
    </div>
}

export default EventsCalendar;
