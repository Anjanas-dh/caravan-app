import { of } from 'rxjs';
import { ChecklistItemDtoDataMock } from '../../mocks/checklist.mock';
import { ChecklistService, IChecklistService } from './checklist.service';

export class ChecklistServiceMock {
    static instance(): jasmine.SpyObj<IChecklistService> {
        let instance = jasmine.createSpyObj<ChecklistService>("ChecklistService", [
            "getChecklistItems",
            "createChecklistItem",
            "updateChecklistItem",
            "deleteChecklistItem",
        ]);

        instance.getChecklistItems.and.returnValue(of(ChecklistItemDtoDataMock.init()));
        instance.createChecklistItem.and.returnValue(of(ChecklistItemDtoDataMock.init()[0]));
        instance.updateChecklistItem.and.returnValue(of(ChecklistItemDtoDataMock.init()[0]));
        instance.deleteChecklistItem.and.returnValue(of(ChecklistItemDtoDataMock.init()[0]));

        return instance;
    }
}
