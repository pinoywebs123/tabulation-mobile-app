import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeventPage } from './pevent.page';

describe('PeventPage', () => {
  let component: PeventPage;
  let fixture: ComponentFixture<PeventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
