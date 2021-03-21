export module StringUtil {
    export function UnCamelCase(str: string, delimiter?: string): string {
        delimiter = delimiter ? delimiter : ' ';
        str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, `$1${delimiter}$2`);
        str = str.toLowerCase(); //add space between camelCase text
        return str;
    }

    export function NotNullOrEmpty(value: any, offset = 0): boolean {
        if (value == null) {
            return false;
        }
        const _string: string = value.toString();
        for (let i = offset; i < _string.length; ++i) {
            if (!(_string[i].trim() === "")) {
                return true;
            }
        }
        return false;
    }
    export function ToKebabCase(value: any): string {
        const str = value.toString();
        return str.split('').map((character: any) => {
            return character.toLowerCase().replace(' ', '-').replace('_', '-');
        }).join('');
    }
}