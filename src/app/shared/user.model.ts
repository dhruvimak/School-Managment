import { TimeTable } from './timetable.model';

export class User {

    constructor(
        private _id: string,
        private firstName: string,
        private lastName: string,
        private employeeId: string,
        private timeTable: TimeTable[],
        private lastUpdated: string) { }
}
