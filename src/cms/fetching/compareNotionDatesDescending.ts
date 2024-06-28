import compareDatesDescending from '@/helpers/compareDatesDescending';

interface HasNotionDate {
    date: Date | [Date, Date];
}
export default function compareNotionDatesDescending(
    a: HasNotionDate,
    b: { date: Date | [Date, Date] },
): number {
    if (a.date instanceof Date && b.date instanceof Date) {
        return compareDatesDescending(a.date, b.date);
    } else if (!(a.date instanceof Date) && !(b.date instanceof Date)) {
        return compareDatesDescending(a.date[0], b.date[0]);
    } else if (a.date instanceof Date && !(b.date instanceof Date)) {
        return compareDatesDescending(a.date, b.date[0]);
    } else if (!(a.date instanceof Date) && b.date instanceof Date) {
        return compareDatesDescending(a.date[0], b.date);
    } else {
        throw new Error(`Could not compare ${a.date} and ${b.date}`);
    }
}
