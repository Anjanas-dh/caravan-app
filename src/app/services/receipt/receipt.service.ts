import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ReceiptItemDto, ReceiptTypeDto } from "src/app/classes/receipt.class";
import { ReceiptItemDtoDataMock, ReceiptTypesDtoDataMock } from "src/app/mocks/receipt.mock";

export interface IReceiptService {
    getReceiptItems(): Observable<ReceiptItemDto[]>;
    createReceiptItem(item: ReceiptItemDto): Observable<ReceiptItemDto>;
    updateReceiptItem(item: ReceiptItemDto): Observable<ReceiptItemDto>;
    deleteReceiptItem(item: ReceiptItemDto): Observable<ReceiptItemDto>;

    getReceiptTypeItems(): Observable<ReceiptTypeDto[]>;
    createReceiptType(item: ReceiptTypeDto): Observable<ReceiptTypeDto>;
    updateReceiptType(item: ReceiptTypeDto): Observable<ReceiptTypeDto>;
    deleteReceiptType(item: ReceiptTypeDto): Observable<ReceiptTypeDto>;
}

@Injectable()
export class ReceiptService implements IReceiptService {
    getReceiptItems(): Observable<ReceiptItemDto[]> {
        return of(ReceiptItemDtoDataMock.init());
    }
    createReceiptItem(item: ReceiptItemDto): Observable<ReceiptItemDto> {
        return of(ReceiptItemDtoDataMock.init()[0]);
    }
    updateReceiptItem(item: ReceiptItemDto): Observable<ReceiptItemDto> {
        return of(ReceiptItemDtoDataMock.init()[0]);
    }
    deleteReceiptItem(item: ReceiptItemDto): Observable<ReceiptItemDto> {
        return of(ReceiptItemDtoDataMock.init()[0]);
    }

    getReceiptTypeItems(): Observable<ReceiptTypeDto[]> {
        return of(ReceiptTypesDtoDataMock.init());
    }
    createReceiptType(item: ReceiptTypeDto): Observable<ReceiptTypeDto> {
        return of(ReceiptTypesDtoDataMock.init()[0]);
    }
    updateReceiptType(item: ReceiptTypeDto): Observable<ReceiptTypeDto> {
        return of(ReceiptTypesDtoDataMock.init()[0]);
    }
    deleteReceiptType(item: ReceiptTypeDto): Observable<ReceiptTypeDto> {
        return of(ReceiptTypesDtoDataMock.init()[0]);
    }
}