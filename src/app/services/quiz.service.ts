import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../interfaces/quiz';
import { Observable } from 'rxjs';
import { Question } from '../interfaces/question';
import { Answer } from '../interfaces/answer';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl='http://localhost:8080/quizzes';

  constructor(private http:HttpClient) { }

  //add quiz
  public addQuiz(quiz:Quiz):Observable<Quiz>{
    return this.http.post<Quiz>(`${this.baseUrl}/add`,quiz);
  }

  //list all quizzes
  public listQuizzes():Observable<Quiz[]>{
    return this.http.get<Quiz[]>(`${this.baseUrl}/getAll`);
  }

  //delete quiz by ID
  public deleteQuiz(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  //update quiz by ID
  public updateQuiz(quiz:Quiz,id:number):Observable<Quiz>{
    return this.http.put<Quiz>(`${this.baseUrl}/update/${id}`,quiz);
  }

  //list questions of quiz
  public listQuestionsOfQuiz(id:number):Observable<Question[]>{
    return this.http.get<Question[]>(`${this.baseUrl}/${id}/getQuestions`);
  }

  //add question to quiz
  public addQuestionToQuiz(quizId:number,question:Question):Observable<Question>{
    return this.http.post<Question>(`${this.baseUrl}/${quizId}/addQuestion`,question);
  }

  //get quiz by ID
  public getQuizById(id:number):Observable<Quiz>{
    return this.http.get<Quiz>(`${this.baseUrl}/get/${id}`);
  }
}
