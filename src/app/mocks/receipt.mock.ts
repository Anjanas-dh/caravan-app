import { ReceiptItemDto, ReceiptTypeDto } from "../classes/receipt.class";

export class ReceiptItemDtoDataMock {
    static init(): ReceiptItemDto[] {
        return [
            new ReceiptItemDto({
                id: '1',
                date: new Date(),
                description: 'Verf',
                receiptType: ReceiptTypesDtoDataMock.init()[0],
                costs: 30,
                receiptUrl: null,
            }),
            new ReceiptItemDto({
                id: '2',
                date: new Date(2020, 1, 4),
                description: 'Toeristenbelasting sept/okt/nov',
                receiptType: ReceiptTypesDtoDataMock.init()[2],
                costs: 500,
                receiptUrl: null,
            }),
            new ReceiptItemDto({
                id: '3',
                date: new Date(2021, 2, 2),
                description: 'Gasfles',
                receiptType: ReceiptTypesDtoDataMock.init()[2],
                costs: 68.34,
                receiptUrl: null,
            }),
            new ReceiptItemDto({
                id: '4',
                date: new Date(2021, 9, 21),
                description: 'Onderhoudsbeurt oktober 2020',
                receiptType: ReceiptTypesDtoDataMock.init()[1],
                costs: 200.34,
                receiptUrl: 'mccalls.jpg',
            }),
        ]
    }
}

export class ReceiptTypesDtoDataMock {
    static init(): ReceiptTypeDto[] {
        return [
            new ReceiptTypeDto({
                id: 'interior',
                name: 'Interior / items',
                color: 'primary',
            }),
            new ReceiptTypeDto({
                id: 'maintenance',
                name: 'Maintenance',
                color: 'warning',
            }),
            new ReceiptTypeDto({
                id: 'consumption',
                name: 'Consumption',
                color: 'success',
            }),
        ]
    }
}
