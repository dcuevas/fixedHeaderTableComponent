import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Column } from './column.component';

describe('Column', () => {
  let component: Column;
  let fixture: ComponentFixture<Column>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Column ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Column);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
