import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundoPage } from './segundo.page';

describe('SegundoPage', () => {
  let component: SegundoPage;
  let fixture: ComponentFixture<SegundoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
