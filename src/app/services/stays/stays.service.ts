import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { StaysItemDto } from "src/app/classes/stays.class";
import { VisitsItemDtoDataMock } from "src/app/mocks/stays.mock";

export interface IStaysService {
    getStaysItems(): Observable<StaysItemDto[]>;
    createStaysItem(item: StaysItemDto): Observable<StaysItemDto>;
    updateStaysItem(item: StaysItemDto): Observable<StaysItemDto>;
    deleteStaysItem(item: StaysItemDto): Observable<StaysItemDto>;
}

@Injectable()
export class StaysService implements IStaysService {
    getStaysItems(): Observable<StaysItemDto[]> {
        return of(VisitsItemDtoDataMock.init());
    }
    createStaysItem(item: StaysItemDto): Observable<StaysItemDto> {
        return of(VisitsItemDtoDataMock.init()[0]);
    }
    updateStaysItem(item: StaysItemDto): Observable<StaysItemDto> {
        return of(VisitsItemDtoDataMock.init()[0]);
    }
    deleteStaysItem(item: StaysItemDto): Observable<StaysItemDto> {
        return of(VisitsItemDtoDataMock.init()[0]);
    }
}