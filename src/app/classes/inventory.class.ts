export class InventoryItemDto {
    id: string;
    name: string;
    color: string;
    inCaravan: boolean;
    atAnja: boolean;
    atLoes: boolean;

    constructor(data?: IInventoryItemDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

export interface IInventoryItemDto {
    id: string;
    name: string;
    color: string;
    inCaravan: boolean;
    atAnja: boolean;
    atLoes: boolean;
};