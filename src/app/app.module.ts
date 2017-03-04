import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FixedHeaderTable } from './fixed-header-table/fixed-header-table.component';
import { PeopleService } from "./people/people.service";
import { Column } from './fixed-header-table/column/column.component';

@NgModule({
  declarations: [
    AppComponent,
    FixedHeaderTable,
    Column
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ PeopleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
