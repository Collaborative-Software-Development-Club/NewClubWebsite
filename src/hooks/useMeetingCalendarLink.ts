import { CalendarEvent, google, ics } from 'calendar-link'
import Link from 'next/link'

const MEETING_HOUR = 19
const MEETING_DAY_OF_THE_WEEK = 3



function useMeetingCalendarLink() {
    const meetingInfo: CalendarEvent = {
        title: 'Collaborative Software Development Club',
        start: findNextMeetingTime(), //'2024-05-29T19:00-04:00', //2007-04-05T12:30−02:00
        duration: [1, 'hours'],
        rRule: 'WEEKLY',
        location: 'Enarson Classroom Building 2009 Millikin Rd Columbus, OH  43210 United States',
        description: 'Room 348',
    }
    return {
        ics: ics(meetingInfo),
        google: google(meetingInfo)
    }
}

function findNextMeetingTime() {
    var date = new Date()
    date.setHours(MEETING_HOUR)
    date.setMinutes(0)
    date.setSeconds(0)
    // set to next day of the week
    date.setDate(date.getDate() + ((((7 - date.getDay()) % 7) + MEETING_DAY_OF_THE_WEEK) % 7))
    return date.toISOString()
}

export default useMeetingCalendarLink