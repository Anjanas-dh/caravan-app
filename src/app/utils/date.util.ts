import { MonthsEnum } from "./enum.util";

export module DateUtil {
    export function ToISOString(date: Date, onlyDate?: boolean): string {
        if (IsDate(date) && !isNaN(date.getTime())) {
            const dateString = new Date(date.getTime() - date.getTimezoneOffset() * MinuteTicks).toISOString();
            return onlyDate ? dateString.split('T')[0] : dateString;
        }
        return null;
    }

    export function ISOToDate(dateString: string): Date {
        if (!dateString) {
            return null;
        }
        let date = new Date(dateString);
        return new Date(date.getTime() + date.getTimezoneOffset() * MinuteTicks);
    }


    export function IsDate(date: Date): boolean {
        if (date == undefined) {
            return false;
        }
        if (Object.prototype.toString.call(date) === "[object Date]") {
            if (isNaN(date.getTime())) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    export function GetMonthEnumByDate(date: Date): MonthsEnum {
        const month = IsDate(date) ? date.getMonth() : null;
        if (!(month >= 0)) { console.error("GetMonthEnumByDate Invalid date"); return null; }
        switch (month) {
            case 0: return MonthsEnum.January;
            case 1: return MonthsEnum.February;
            case 2: return MonthsEnum.March;
            case 3: return MonthsEnum.April;
            case 4: return MonthsEnum.May;
            case 5: return MonthsEnum.June;
            case 6: return MonthsEnum.Juli;
            case 7: return MonthsEnum.August;
            case 8: return MonthsEnum.September;
            case 9: return MonthsEnum.October;
            case 10: return MonthsEnum.November;
            case 11: return MonthsEnum.December;
        }
    }
}

export const MinuteTicks = 60000;
