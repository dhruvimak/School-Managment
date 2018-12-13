import { ClassValue } from './class-value.model';

export class TimeTable {

    constructor(
       private value: ClassValue[],
       private _id: string,
       private day: string
    ){}
    
}