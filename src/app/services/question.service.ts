import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Question } from '../interfaces/question';
import { Answer } from '../interfaces/answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl='http://localhost:8080/questions';

  constructor(private http:HttpClient) { }

  //add question
  public addQuestion(question:Question):Observable<Question>{
    return this.http.post<Question>(`${this.baseUrl}/add`,question);
  }

  //list questions
  public listQuestions():Observable<Question[]>{
    return this.http.get<Question[]>(`${this.baseUrl}/getAll`);
  }

  //delete question by ID
  public deleteQuestion(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  //get question by ID
  public getQuestion(id:number):Observable<Question>{
    return this.http.get<Question>(`${this.baseUrl}/get/${id}`);
  }

  //update question
  public updateQuestion(question:Question,id:number):Observable<Question>{
    return this.http.put<Question>(`${this.baseUrl}/update/${id}`,question);
  }

  //add answer to question
  public addAnswer(answer:Answer,id:number):Observable<Answer>{
    return this.http.post<Answer>(`${this.baseUrl}/${id}/addAnswer`,answer);
  }

    //get answers of question
    public getAnswers(id:number):Observable<Answer[]>{
      return this.http.get<Answer[]>(`${this.baseUrl}/${id}/getAnswers`);
    }

    //getAll
    public getAll():Observable<Question[]>{
      return this.http.get<Question[]>(`${this.baseUrl}/getAll`);
    }


}
