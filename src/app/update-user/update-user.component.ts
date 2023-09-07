import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  user: { username: string, email: string, phone: string ,id:number} = {
    username: '',
    email: '',
    phone: '',
    id:1
    
  };

  userId: number=0;

  constructor(private userService:UserService,private route:ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
    });
  }

  //update user by Id
  public updateUserById(){
    const userUsername = (document.getElementById("username") as HTMLInputElement).value;
    const userEmail = (document.getElementById("email") as HTMLInputElement).value;
    const userPhone=(document.getElementById("phone") as HTMLInputElement).value;

    const user : User = {
      username:userUsername,
      email:userEmail,
      phone:userPhone,
      id:1,
      answers:[],
    };
    

    return this.userService.updateUser(user,this.userId).subscribe(
      (response:User)=>{
        console.log('user updated successfully !',response);
      }
    ),
    (error:Error)=>{
      console.log('error updating user !',error);
    }
  }

  submitForm(){
    this.updateUserById();
  }

}
