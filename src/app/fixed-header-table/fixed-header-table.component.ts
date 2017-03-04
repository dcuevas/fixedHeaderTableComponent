import {Component, QueryList, ContentChildren, Input} from '@angular/core';
import {Column} from "./column/column.component";
import {AfterContentInit} from "@angular/core";

@Component({
  selector: 'dc-fixed-header-table',
  templateUrl: 'fixed-header-table.component.html',
  styleUrls: ['fixed-header-table.component.scss']
})
export class FixedHeaderTable implements AfterContentInit {
  @Input() value: any;

  @ContentChildren(Column) cols: QueryList<Column>;

  public columns: Column[];

  constructor() { }

  ngAfterContentInit() {
    this.initColumns();

  }
  private initColumns() {
    this.columns = this.cols.toArray();
  }
}
