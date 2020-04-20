import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService} from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { HttpClientModule } from '@angular/common/http'
  import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
