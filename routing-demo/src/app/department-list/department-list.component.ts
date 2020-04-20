import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
  import { from } from 'rxjs';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List </h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selectd]="isSelected(department)" *ngFor= "let department of departments" >
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  departments= [
    {'id':1, "name":"angular"},
    {'id':2, "name":"Nodejs"},
    {'id':3, "name":"MongoDB"},
    {'id':4, "name":"Javascript"}
  ]
  public selectedId;

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'))
      this.selectedId = id;
    });
  }
  onSelect(department){
    //this.router.navigate(['/departments',department.id])
    // relavtive path
    this.router.navigate([department.id],{relativeTo:this.route})
  }
  isSelected(department){
    return department.id === this.selectedId;
  }

}
