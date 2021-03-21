import { of } from 'rxjs';
import { InventoryItemDtoDataMock } from 'src/app/mocks/inventory.mock';
import { IInventoryService, InventoryService } from './inventory.service';

export class InventoryServiceMock {
    static instance(): jasmine.SpyObj<IInventoryService> {
        let instance = jasmine.createSpyObj<InventoryService>("InventoryService", [
            "getInventoryItems",
            "createInventoryItem",
            "updateInventoryItem",
            "deleteInventoryItem",
        ]);

        instance.getInventoryItems.and.returnValue(of(InventoryItemDtoDataMock.init()));
        instance.createInventoryItem.and.returnValue(of(InventoryItemDtoDataMock.init()[0]));
        instance.updateInventoryItem.and.returnValue(of(InventoryItemDtoDataMock.init()[0]));
        instance.deleteInventoryItem.and.returnValue(of(InventoryItemDtoDataMock.init()[0]));

        return instance;
    }
}
