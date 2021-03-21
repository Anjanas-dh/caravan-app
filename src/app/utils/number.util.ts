export module NumberUtil {
    export function RandomNumber(decimals: boolean = false, maxNumber: number = 100) {
        return decimals ? Math.random() * maxNumber : Math.floor(Math.random() * maxNumber);
    }
}