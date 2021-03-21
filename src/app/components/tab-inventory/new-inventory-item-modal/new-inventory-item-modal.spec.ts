import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ChecklistService } from 'src/app/services/checklist/checklist.service';
import { ChecklistServiceMock } from 'src/app/services/checklist/checklist.service.mock';
import { NewInventoryItemModal } from './new-inventory-item-modal';

describe('NewInventoryItemModal', () => {
    let component: NewInventoryItemModal;
    let fixture: ComponentFixture<NewInventoryItemModal>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [NewInventoryItemModal],
            imports: [
                IonicModule.forRoot()
            ],
            providers: [
                { provide: ChecklistService, useFactory: () => ChecklistServiceMock.instance() },
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(NewInventoryItemModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
