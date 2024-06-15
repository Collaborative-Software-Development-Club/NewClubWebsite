import { CalendarEvent, google, ics } from 'calendar-link';

/**
 * Returns an object containing the ICS and Google calendar links for the meeting
 *
 * @param {number} dayOfTheWeek - The day of the week on which the meeting is held (0-6, where 0 is Sunday and 6 is Saturday).
 * @param {number} hour - The hour of the day at which the meeting starts.
 * @return {{ ics: string, google: string }} - An object containing the ICS and Google calendar links.
 */
function getMeetingCalendarLink(dayOfTheWeek: number, hour: number) {
    const meetingInfo: CalendarEvent = {
        title: 'Collaborative Software Development Club',
        start: findNextMeetingTime(dayOfTheWeek, hour), //'2024-05-29T19:00-04:00', //2007-04-05T12:30−02:00
        duration: [1, 'hours'],
        rRule: 'WEEKLY',
        location: 'Enarson Classroom Building 2009 Millikin Rd Columbus, OH  43210 United States',
        description: 'Room 348',
    };
    return {
        ics: ics(meetingInfo),
        google: google(meetingInfo),
    };
}

function findNextMeetingTime(dayOfTheWeek: number, hour: number) {
    var date = new Date();
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);
    // set to next day of the week
    date.setDate(date.getDate() + ((((7 - date.getDay()) % 7) + dayOfTheWeek) % 7));
    return date.toISOString();
}

export default getMeetingCalendarLink;
