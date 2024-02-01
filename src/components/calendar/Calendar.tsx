'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { Calendar as BigCalendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Event } from '@/constants/data.types';

const DUMMY_EVENTS: Event[] =
    [{ title: 'Test', startDate: new Date().toISOString(), endDate: new Date().toISOString(), isAllDay: false, description: 'test', location: 'test' }]


const localizer = momentLocalizer(moment);

const EventsCalendar = () => {
    const [calendarView, setCalendarView] = useState(Views.MONTH);


    const { defaultDate } = useMemo(() => {
        return {
            defaultDate: new Date()
        }
    }, [])

    const onChangeView = useCallback((newView: React.SetStateAction<"month">) => setCalendarView(newView), [setCalendarView])

    return <div>
        <BigCalendar localizer={localizer} events={[{ title: "Test", start: new Date().toISOString(), end: new Date().toISOString() }]} startAccessor="start" endAccessor="end" defaultDate={defaultDate} onView={onChangeView} view={calendarView} views={['month', 'week']} showAllEvents={false} step={15} toolbar={true} />
    </div>
}

export default EventsCalendar;
