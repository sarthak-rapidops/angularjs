import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  public username = "";
  public address = "";
  public toggle = true;
  public status = 'Enable' 
  onusername(username){
    this.username += username;
  }
  onaddress(address){
    this.address += address;
  }
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'success' : 'Danger';
  }
  clear() {
    this.username ='';
    this.address ='';
  }

}
