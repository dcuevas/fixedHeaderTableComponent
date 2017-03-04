import {
  Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, ContentChild,
  TemplateRef
} from '@angular/core';


@Component({
  selector: 'dc-column',
  template: ''
})
export class Column  {
  @Input() field:string;
  @Input() header:string;
  @Input() style: any;
  @ContentChild(TemplateRef) template: TemplateRef<any>;
}
