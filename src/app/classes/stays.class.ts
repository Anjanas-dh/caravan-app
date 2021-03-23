import { MonthsEnum } from "../utils/enum.util";

export class StaysItemDto {
    id: string;
    date: Date;
    month: MonthsEnum;
    anja: boolean;
    loes: boolean;
    visitors: boolean;
    visitorNames?: string;

    constructor(data?: IStaysItemDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

export interface IStaysItemDto {
    id: string;
    month: MonthsEnum;
    date: Date;
    anja: boolean;
    loes: boolean;
    visitors: boolean;
    visitorNames?: string;
};

export interface IStayGroupedByMonth {
    month: MonthsEnum;
    stays: IStaysItemDto[];
}