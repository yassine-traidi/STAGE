import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../interfaces/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  baseUrl='http://localhost:8080/scores';

  constructor(private http:HttpClient) { }

  //get all scores
  public ListScores():Observable<Score[]>{
    return this.http.get<Score[]>(`${this.baseUrl}/getAll`);
  }

    //save score
    public saveScore(score:Score):Observable<Score>{
      return this.http.post<Score>(`${this.baseUrl}/add`,score);
    }
}
