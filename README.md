# Angular 2: Fixed Header Table Component

Angular 2 component to render data as table with the header fixed and scrollable body.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Getting started
**FixedHeaderTable** requires a value as an array of objects and columns defined with dc-column component. 
Throughout the samples, a people interface having name and email properties is used to define an object to be displayed by the **FixedHeaderTable**.

```
<dc-fixed-header-table [value]="people">
  <dc-column field="name" header="Name"></dc-column>
  <dc-column field="email" header="Mail"></dc-column>
</dc-fixed-header-table>
```

### Style
This component uses Bootstrap 4 styles. Styles can be changed to adapt to your needs in case you do not use bootstrap.

In order to have same width for the header and body columns style property need to be used and set width property. Any other style property can be used through style input:
```
<dc-fixed-header-table [value]="people">
  <dc-column field="name" header="Name" [style]="{'width': '50%'}"></dc-column>
  <dc-column field="email" header="Mail" [style]="{'width': '50%'}"></dc-column>
</dc-fixed-header-table>

```
### Template
Field data of a corresponding row is displayed as the cell content by default, this can be customized using templating where the implicit variable passed to the template is the column definition and data of current row is the rowData property. 

```
<dc-fixed-header-table [value]="people">
  <dc-column field="name" header="Name" [style]="{'width': '20%'}">
    <template let-person="rowData" let-column>
      <strong>{{person[column.field]}}</strong>
    </template>
  </dc-column>
  <dc-column field="gender" header="Gender" [style]="{'width': '10%'}"></dc-column>
  <dc-column field="company" header="Company" [style]="{'width': '10%'}"></dc-column>
  <dc-column field="email" header="Mail" [style]="{'width': '30%'}"></dc-column>
  <dc-column field="date" header="Born date" [style]="{'width': '20%'}">
    <template let-person="rowData" let-column>
      {{ person[column.field] | date }}
    </template>
  </dc-column>
</dc-fixed-header-table>
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Note: tests are not implemented.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Note: e2e tests are not implemented.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
