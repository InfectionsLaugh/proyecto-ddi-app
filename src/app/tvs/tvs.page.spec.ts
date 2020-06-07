import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TvsPage } from './tvs.page';

describe('TvsPage', () => {
  let component: TvsPage;
  let fixture: ComponentFixture<TvsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TvsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
