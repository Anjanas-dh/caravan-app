import { StaysItemDto } from "../classes/stays.class";
import { MonthsEnum } from "../utils/enum.util";

export class VisitsItemDtoDataMock {
    static init(): StaysItemDto[] {
        return [
            new StaysItemDto({
                id: '1',
                date: new Date(2020, 8, 16),
                month: MonthsEnum.September,
                anja: true,
                loes: true,
                visitors: false,
            }),
            new StaysItemDto({
                id: '2',
                date: new Date(2020, 9, 1),
                month: MonthsEnum.October,
                anja: true,
                loes: true,
                visitors: false,
            }),
            new StaysItemDto({
                id: '3',
                date: new Date(2020, 9, 14),
                month: MonthsEnum.October,
                anja: true,
                loes: true,
                visitors: true,
                visitorNames: 'Machiel',
            }),
            new StaysItemDto({
                id: '4',
                date: new Date(2020, 9, 24),
                month: MonthsEnum.October,
                anja: false,
                loes: true,
                visitors: true,
                visitorNames: 'Machiel',
            }),
            new StaysItemDto({
                id: '5',
                date: new Date(2020, 9, 29),
                month: MonthsEnum.October,
                anja: false,
                loes: true,
                visitors: true,
                visitorNames: 'Wendy, Roger, Machiel',
            }),
            new StaysItemDto({
                id: '6',
                date: new Date(2021, 0, 11),
                month: MonthsEnum.January,
                anja: true,
                loes: false,
                visitors: false,
            }),
        ]
    }
}