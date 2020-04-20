import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> login page</h1>
  <pre><input #name></pre>
  <pre><input #pass></pre>
  <pre><button (click)="validateuser(name.value, pass.value)">login</button></pre>
  <pre><h2 [ngClass]= "classapply">{{message}}</h2></pre>
  `,
  styles: [`
    .text-success {
      color: green;
    }  
    .text-danger{
      color:red;
    }
    .text-warning {
      color: orange;
    }
  `
  ]
})
export class AppComponent {
  title = 'validation';
  public uname = '';
  public pass = '';
  public classapply= ''
  public message = ''
  validateuser(uname, pass){
    if(uname == "abc" && pass =="123"){
      this.classapply = "text-success";
      this.message += "valid user"
    }if(uname.length >3 || pass.length >3 ){
      this.classapply = "text-warning"
      this.message += "username and password must be less then 3 character"
    } 
    else {
      this.classapply = "text-danger"
    }
  }
}
