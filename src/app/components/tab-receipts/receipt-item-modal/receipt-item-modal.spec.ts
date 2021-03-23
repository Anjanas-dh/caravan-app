import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';
import { ReceiptServiceMock } from 'src/app/services/receipt/receipt.service.mock';
import { ReceiptItemModal } from './receipt-item-modal';

describe('ReceiptItemModal', () => {
    let component: ReceiptItemModal;
    let fixture: ComponentFixture<ReceiptItemModal>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ReceiptItemModal],
            imports: [
                IonicModule.forRoot()
            ],
            providers: [
                { provide: ReceiptService, useFactory: () => ReceiptServiceMock.instance() },
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ReceiptItemModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
