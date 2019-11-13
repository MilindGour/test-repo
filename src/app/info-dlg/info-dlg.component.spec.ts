import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDlgComponent } from './info-dlg.component';

describe('InfoDlgComponent', () => {
  let component: InfoDlgComponent;
  let fixture: ComponentFixture<InfoDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
