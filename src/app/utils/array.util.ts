export module ArrayUtil {
    export function GroupBy<T1, T2>(items: T1[], getKey: (item: T1) => T2, keyId: string | number = 'id'): IGroup<T1, T2>[] {
        const result: IGroup<T1, T2>[] = [];
        if (Array.isArray(items) && typeof getKey === 'function') {
            items.forEach((item) => {
                const key = getKey(item);
                const group: IGroup<T1, T2> = result.find(x => x.key === key || x.key && key && (<any>key)[keyId] && (<any>x.key)[keyId] === (<any>key)[keyId]);
                if (!group) {
                    result.push({ key: key, items: [item] })
                } else {
                    group.items.push(item);
                }
            });
        }
        return result;
    }

    export interface IGroup<T1, T2> {
        key: T2;
        items: Array<T1>;
    }
}