export default function compareNotionDatesDescending(
    dateA: Date | [Date, Date],
    dateB: Date | [Date, Date],
): number {
    if (dateA instanceof Date && dateB instanceof Date) {
        return compareDatesDescending(dateA, dateB);
    } else if (!(dateA instanceof Date) && !(dateB instanceof Date)) {
        return compareDatesDescending(dateA[0], dateB[0]);
    } else if (dateA instanceof Date && !(dateB instanceof Date)) {
        return compareDatesDescending(dateA, dateB[0]);
    } else if (!(dateA instanceof Date) && dateB instanceof Date) {
        return compareDatesDescending(dateA[0], dateB);
    } else {
        throw new Error(`Could not compare ${dateA} and ${dateB}`);
    }
}

function compareDatesDescending(dateA: Date, dateB: Date): number {
    return dateB.getTime() - dateA.getTime();
}
