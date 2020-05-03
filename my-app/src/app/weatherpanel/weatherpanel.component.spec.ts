import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherpanelComponent } from './weatherpanel.component';

describe('WeatherpanelComponent', () => {
  let component: WeatherpanelComponent;
  let fixture: ComponentFixture<WeatherpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
