export module DateUtil {
    /**
        * Returns a date as a string value in ISO format.
        * Including the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
        * @param date
        */
    export function ToISOString(date: Date, onlyDate?: boolean): string {
        if (IsDate(date) && !isNaN(date.getTime())) {
            const dateString = new Date(date.getTime() - date.getTimezoneOffset() * MinuteTicks).toISOString();
            return onlyDate ? dateString.split('T')[0] : dateString;
        }
        return null;
    }

    /**
     * Returns a date.
     *  Including the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
     * @param dateString
     */
    export function ISOToDate(dateString: string): Date {
        if (!dateString) {
            return null;
        }
        let date = new Date(dateString);
        return new Date(date.getTime() + date.getTimezoneOffset() * MinuteTicks);
    }
}

/**
     * Returns true if object is type of Date | '[object Date]'
     * @param date
     */
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

export const MinuteTicks = 60000;
