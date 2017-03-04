import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedHeaderTable } from './fixed-header-table.component';

describe('FixedHeaderTable', () => {
  let component: FixedHeaderTable;
  let fixture: ComponentFixture<FixedHeaderTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedHeaderTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedHeaderTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
