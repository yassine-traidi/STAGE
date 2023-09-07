import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user :User={
    id:1,
    username:'',
    email:'',
    phone:'',
    answers:[],
  }

  constructor(private userService:UserService) {}

  //add User
  public addUser(user:User){
    this.userService.addUser(user).subscribe(
      (response:User)=>{
        this.user.id=response.id;
        console.log('User added successfully !',response);
      }
    ),
    (error:Error)=>{
      console.log('Error adding user !',error);
    }
  }

  submitForm(){}

  //save button
  save(){
    this.user.username=(document.getElementById("username") as HTMLInputElement).value;
    this.user.phone=(document.getElementById("phone") as HTMLInputElement).value;
    this.user.email=(document.getElementById("email") as HTMLInputElement).value;

    this.addUser(this.user);

    this.user.username='';
    this.user.email='';
    this.user.phone='';
    this.user.id=0;

  }

}
