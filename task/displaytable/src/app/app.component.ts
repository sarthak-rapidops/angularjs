import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'displaytable';
  headers = ["id", "name", "age"];
  rows =[
    {
      "id":"1",
      "name":"abc",
      "age":"20"
    },
    {
      "id":"2",
      "name":"xyz",
      "age":"21"
    },
    {
      "id":"3",
      "name":"pqr",
      "age":"22"
    },
    {
      "id":"4",
      "name":"uvw",
      "age":"23"
    },
  ]
}
