import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoorsPage } from './doors.page';

describe('DoorsPage', () => {
  let component: DoorsPage;
  let fixture: ComponentFixture<DoorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
