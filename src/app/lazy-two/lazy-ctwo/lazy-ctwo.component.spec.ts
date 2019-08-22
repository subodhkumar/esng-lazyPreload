import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCTwoComponent } from './lazy-ctwo.component';

describe('LazyCTwoComponent', () => {
  let component: LazyCTwoComponent;
  let fixture: ComponentFixture<LazyCTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyCTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
