import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  // {{}} - interpolation
  /*template:`<h2>
              welcome {{name}}
              <h2>
              <h2>{{2+2}}</h2>
              <h2>{{"welcom"+ name}}</h2>
              <h2>{{name.length}}</h2>
              <h2>{{name.toUpperCase()}}</h2>
              <h2>{{greetUser()}}</h2>
              <h2>{{siteUrl}}</h2>
              `,*/
  //property binding
   // 1. using [] we can bind property
  // 2. using bind-property name
  /*template:`<h2>{{name}}</h2>
  <input bind-disabled= "isDisable" [id]="myId" type="text" value="sarthak">
  `,*/
  /*template:`
  <h2>{{name}}</h2>
  <h2 class= "text-success">shah</h2>
  <h2 [class]= "successClass">shah</h2>
  <h2 [class.text-danger]= "hasError">shah</h2>
  <h2 [ngClass]= "messageClasses">shah</h2>
  `,*/
  //binding classes
 /* styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color:red;
  }
  .text-special {
    font-style: italic;
  } 
  `]*/
  /*template:`<h2>{{name}}</h2>
  <h2 [style.color]= "'green'">style binding</h2>
  <h2 [style.color]= "hasError ? 'red' :'greem'">style binding</h2>
  <h2 [style.color]= "highlightColor">style binding</h2>
  <h2 [ngStyle]= "titleStyle">style binding</h2>`,
  styles:[``]*/

  // event binding
  /*template:`<h2>{{name}}</h2>
  <button (click)="onClick($event)">Greet</button>{{greeting}}
  <button (click)= "greeting='welcome sarthak'">press</button>`,
  styles:[]*/

  // template reference variable
 /* template: `<h2>{{name}}</h2>
  <input #myInput >
  <button (click)="logMessage(myInput.value)">log</button>
  `,
  styles:[]*/
  //two way binding
  template:`
  <input [(ngModel)]="name" type="text">
  {{name}}`,
  styles:[]
})
export class DatabindingComponent implements OnInit {

  public name = "Sarthak";
  //public siteUrl = window.location.href;
  public myId = "testId"; 
  public isDisable = true; 
  public successClass = "text-success"
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
    // the above code apply only those class whos value is true
  }
  public highlightColor = "orange"
  public titleStyle = {
    color: "blue",
    fontStyle: "italic"    
  }
  public greeting = "";
  // two way binding
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "hello" + this.name;
  }
  onClick(event) {
    console.log(event)
    this.greeting= event.type
  }
  logMessage(value){
    console.log(value)
  }
}
