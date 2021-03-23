import { of } from 'rxjs';
import { VisitsItemDtoDataMock } from 'src/app/mocks/stays.mock';
import { IStaysService, StaysService } from './stays.service';

export class StaysServiceMock {
    static instance(): jasmine.SpyObj<IStaysService> {
        let instance = jasmine.createSpyObj<StaysService>("StaysService", [
            "getStaysItems",
            "createStaysItem",
            "updateStaysItem",
            "deleteStaysItem",
        ]);

        instance.getStaysItems.and.returnValue(of(VisitsItemDtoDataMock.init()));
        instance.createStaysItem.and.returnValue(of(VisitsItemDtoDataMock.init()[0]));
        instance.updateStaysItem.and.returnValue(of(VisitsItemDtoDataMock.init()[0]));
        instance.deleteStaysItem.and.returnValue(of(VisitsItemDtoDataMock.init()[0]));

        return instance;
    }
}
