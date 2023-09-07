import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl='http://localhost:8080/users';

  constructor(private http:HttpClient) { }

  //add user
  public addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/add`,user);
  }

  //list users
  public ListUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/getAll`);
  }

  // delete user byd ID
  public deleteUser(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  //update user by ID
  public updateUser(user:User,id:number):Observable<User>{
    return this.http.put<User>(`${this.baseUrl}/update/${id}`,user);
  }

  //get user by ID
  public getUser(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/get/${id}`);
  }
}
