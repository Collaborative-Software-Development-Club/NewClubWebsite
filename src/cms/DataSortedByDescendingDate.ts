import { ComparableData } from './NotionDatabaseFetcher';
import compareDatesDescending from '@/helpers/compareDatesDescending';
export default abstract class DataSortedByDescendingDate implements ComparableData {
    public abstract date: Date | [Date, Date];
    public compare(other: DataSortedByDescendingDate): number {
        if (this.date instanceof Date && other.date instanceof Date) {
            return compareDatesDescending(this.date, other.date);
        } else if (!(this.date instanceof Date) && !(other.date instanceof Date)) {
            return compareDatesDescending(this.date[0], other.date[0]);
        } else if (this.date instanceof Date && !(other.date instanceof Date)) {
            return compareDatesDescending(this.date, other.date[0]);
        } else if (!(this.date instanceof Date) && other.date instanceof Date) {
            return compareDatesDescending(this.date[0], other.date);
        } else {
            throw new Error(`Could not compare ${this.date} and ${other.date}`);
        }
    }
}
