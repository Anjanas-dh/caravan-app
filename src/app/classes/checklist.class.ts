export class ChecklistItemDto implements IChecklistItemDto {
    id: string;
    name: string;
    done: boolean;

    constructor(data?: IChecklistItemDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

export interface IChecklistItemDto {
    id: string;
    name: string;
    done: boolean;
}