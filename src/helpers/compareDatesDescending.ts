export default function compareDatesDescending(dateA: Date, dateB: Date): number {
    return dateB.getTime() - dateA.getTime();
}
