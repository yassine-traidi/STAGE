import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent {

  constructor(private router:Router){}

  //Redirect to Add User
  public RedirectToAddUser(){
    console.log('redirecting to Add User page...');
    this.router.navigate(['/add-user']);
  }

  //Redirect to List Users
  public RedirectToListUsers(){
    this.router.navigate(['/list-users']);
  }

}
