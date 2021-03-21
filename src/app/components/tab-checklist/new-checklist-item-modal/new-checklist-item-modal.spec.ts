import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ChecklistService } from 'src/app/services/checklist.service';
import { ChecklistServiceMock } from 'src/app/services/checklist.service.mock';
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
                { provide: ChecklistService, useFactory: () => ChecklistServiceMock.instance() },
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
