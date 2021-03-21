import { of } from 'rxjs';
import { ReceiptItemDtoDataMock, ReceiptTypesDtoDataMock } from 'src/app/mocks/receipt.mock';
import { IReceiptService, ReceiptService } from './receipt.service';

export class ReceiptServiceMock {
    static instance(): jasmine.SpyObj<IReceiptService> {
        let instance = jasmine.createSpyObj<ReceiptService>("ReceiptService", [
            "getReceiptItems",
            "createReceiptItem",
            "updateReceiptItem",
            "deleteReceiptItem",

            "getReceiptTypeItems",
            "createReceiptItem",
            "updateReceiptItem",
            "deleteReceiptItem",
        ]);

        instance.getReceiptItems.and.returnValue(of(ReceiptItemDtoDataMock.init()));
        instance.createReceiptItem.and.returnValue(of(ReceiptItemDtoDataMock.init()[0]));
        instance.updateReceiptItem.and.returnValue(of(ReceiptItemDtoDataMock.init()[0]));
        instance.deleteReceiptItem.and.returnValue(of(ReceiptItemDtoDataMock.init()[0]));

        instance.getReceiptTypeItems.and.returnValue(of(ReceiptTypesDtoDataMock.init()));
        instance.createReceiptType.and.returnValue(of(ReceiptTypesDtoDataMock.init()[0]));
        instance.updateReceiptType.and.returnValue(of(ReceiptTypesDtoDataMock.init()[0]));
        instance.deleteReceiptType.and.returnValue(of(ReceiptTypesDtoDataMock.init()[0]));

        return instance;
    }
}
