import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{

  users:User[]=[];

  constructor(private userService:UserService,private router:Router) { }
  ngOnInit(){
    this.listUsers();
  }
  

  //list all users
  public listUsers(){
    this.userService.ListUsers().subscribe(
      (response:User[])=>{
        this.users=response;
        console.log('Listed Users Successfully !',response);
      }
    ),
    (error:Error)=>{
      console.log('Error listing users !',error);
    }
    this.users=[];
  }

  //delete user by ID
  public deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      (response:void)=>{
        console.log('User deleted successfully !');
      }
    ),
    (error:Error)=>{
      console.log('Error deleting user !',error);
    }
  }

  public redirectToUpdateUser(id:number){
    this.router.navigate(['/update-user'],{ queryParams: { userId: id } });
  }

  public redirectToUserDetails(id:number,name:string){
    this.router.navigate(['/user-details'],{queryParams: {userId:id ,username:name } } );
  }

}
