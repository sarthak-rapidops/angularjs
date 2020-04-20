import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service'
@Component({
  selector: 'app-employee-list',
  template: `
  <h2> Employee list</h2>
  <h3> {{errormsg}}</h3>
  <ul *ngFor= "let employee of employees">
    <li> {{employee.name}}</li>
  <ul>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  public employees =[]
  public errormsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(){
    this._employeeService.getEmployee()
    .subscribe(data => this.employees = data,
      error => this.errormsg = error);
  }

}
