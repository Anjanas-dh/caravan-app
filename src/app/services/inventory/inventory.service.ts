import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { InventoryItemDto } from "src/app/classes/inventory.class";
import { InventoryItemDtoDataMock } from "src/app/mocks/inventory.mock";


export interface IInventoryService {
    getInventoryItems(): Observable<InventoryItemDto[]>;
    createInventoryItem(item: InventoryItemDto): Observable<InventoryItemDto>;
    updateInventoryItem(item: InventoryItemDto): Observable<InventoryItemDto>;
    deleteInventoryItem(item: InventoryItemDto): Observable<InventoryItemDto>;
}


@Injectable()
export class InventoryService implements IInventoryService {
    getInventoryItems(): Observable<InventoryItemDto[]> {
        return of(InventoryItemDtoDataMock.init());
    }
    createInventoryItem(item: InventoryItemDto): Observable<InventoryItemDto> {
        return of(InventoryItemDtoDataMock.init()[0]);
    }
    updateInventoryItem(item: InventoryItemDto): Observable<InventoryItemDto> {
        return of(InventoryItemDtoDataMock.init()[0]);
    }
    deleteInventoryItem(item: InventoryItemDto): Observable<InventoryItemDto> {
        return of(InventoryItemDtoDataMock.init()[0]);
    }
}