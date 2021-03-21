import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { InventoryServiceMock } from 'src/app/services/inventory/inventory.service.mock';
import { NewChecklistItemModal } from './new-checklist-item-modal';

describe('NewChecklistItemModal', () => {
    let component: NewChecklistItemModal;
    let fixture: ComponentFixture<NewChecklistItemModal>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [NewChecklistItemModal],
            imports: [
                IonicModule.forRoot()
            ],
            providers: [
                { provide: InventoryService, useFactory: () => InventoryServiceMock.instance() },
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(NewChecklistItemModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
