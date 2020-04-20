import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>login page</h1>
  <pre><input [(ngModel)]="username" type="text"></pre>
  <pre><input [(ngModel)]="password" type="text"></pre>
  <pre><button  [disabled]="!username  || !password "(click) ="login(username, password)">Login</button></pre>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  public username = "";
  public password = "";
  public isDisable = true;
  login(username, password) {
      console.log(this.username)
      console.log(this.password)
  }
}
