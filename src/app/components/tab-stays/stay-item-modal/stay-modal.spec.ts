import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StaysService } from 'src/app/services/stays/stays.service';
import { StaysServiceMock } from 'src/app/services/stays/stays.service.mock';
import { StayModal } from './stay-modal';

describe('StayModal', () => {
    let component: StayModal;
    let fixture: ComponentFixture<StayModal>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [StayModal],
            imports: [
                IonicModule.forRoot()
            ],
            providers: [
                { provide: StaysService, useFactory: () => StaysServiceMock.instance() },
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(StayModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
