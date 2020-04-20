import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcompo',
  /*class
  selector: '.app-firstcompo',*/
  //selector: '[app-firstcompo]',
  //templateUrl: './firstcompo.component.html',
  //inline template
  template: `<div> 
                inline template
              <div>`,
  styleUrls: ['./firstcompo.component.css']
})
export class FirstcompoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
