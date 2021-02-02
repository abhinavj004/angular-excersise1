import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'new-project';

  
  
  
  // for Users
  users =[];
  pushUsers(data){
    this.users.push(data);
  }
  onRemoveUsers(item){
    this.users.splice(item, 1)
  }

  // for Admins
  admins =[];
  pushAdmins(data){
    this.admins.push(data);
  }
  onRemoveAdmins(item){
    this.admins.splice(item, 1)
  }

  
}
