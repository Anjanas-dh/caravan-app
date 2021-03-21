import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TabSavingsPage } from './tab-savings.page';

describe('TabSavingsPage', () => {
  let component: TabSavingsPage;
  let fixture: ComponentFixture<TabSavingsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TabSavingsPage],
      imports: [
        IonicModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabSavingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
