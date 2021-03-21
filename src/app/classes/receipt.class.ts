export class ReceiptItemDto implements IReceiptItemDto {
    id: string;
    date: Date;
    description: string;
    receiptType: IReceiptTypeDto;
    costs: number;
    receiptUrl: string;
    showImage?: boolean;

    constructor(data?: IReceiptItemDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

export interface IReceiptItemDto {
    id: string;
    date: Date;
    description: string;
    receiptType: IReceiptTypeDto;
    costs: number;
    receiptUrl: string;
    showImage?: boolean;
}

export class ReceiptTypeDto implements IReceiptTypeDto {
    id: string;
    name: string;
    color: string;

    constructor(data?: IReceiptTypeDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

export interface IReceiptTypeDto {
    id: string;
    name: string;
    color: string;
}
