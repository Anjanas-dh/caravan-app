import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ChecklistService } from 'src/app/services/checklist.service';
import { ChecklistServiceMock } from 'src/app/services/checklist.service.mock';
import { TabChecklistPage } from './tab-checklist.page';


describe('TabChecklistPage', () => {
  let component: TabChecklistPage;
  let fixture: ComponentFixture<TabChecklistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TabChecklistPage],
      imports: [
        IonicModule.forRoot()
      ],
      providers: [
        { provide: ChecklistService, useFactory: () => ChecklistServiceMock.instance() },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
