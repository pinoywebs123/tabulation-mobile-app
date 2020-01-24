import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandidateinfoPage } from './candidateinfo.page';

describe('CandidateinfoPage', () => {
  let component: CandidateinfoPage;
  let fixture: ComponentFixture<CandidateinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
