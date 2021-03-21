import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ChecklistItemDto } from "src/app/classes/checklist.class";
import { ChecklistItemDtoDataMock } from "src/app/mocks/checklist.mock";

export interface IChecklistService {
    getChecklistItems(): Observable<ChecklistItemDto[]>;
    createChecklistItem(item: ChecklistItemDto): Observable<ChecklistItemDto>;
    updateChecklistItem(item: ChecklistItemDto): Observable<ChecklistItemDto>;
    deleteChecklistItem(item: ChecklistItemDto): Observable<ChecklistItemDto>;
}

@Injectable()
export class ChecklistService implements IChecklistService {
    getChecklistItems(): Observable<ChecklistItemDto[]> {
        return of(ChecklistItemDtoDataMock.init());
    }
    createChecklistItem(item: ChecklistItemDto): Observable<ChecklistItemDto> {
        return of(ChecklistItemDtoDataMock.init()[0]);
    }
    updateChecklistItem(item: ChecklistItemDto): Observable<ChecklistItemDto> {
        return of(ChecklistItemDtoDataMock.init()[0]);
    }
    deleteChecklistItem(item: ChecklistItemDto): Observable<ChecklistItemDto> {
        return of(ChecklistItemDtoDataMock.init()[0]);
    }
}