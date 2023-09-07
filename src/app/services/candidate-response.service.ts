import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateResponse } from '../interfaces/candidateResponse';

@Injectable({
  providedIn: 'root'
})
export class CandidateResponseService {

  baseUrl='http://localhost:8080/candidateResponses';

  constructor(private http:HttpClient) { }

  //list candidate responses
  public lisCandidateResponses():Observable<CandidateResponse[]>{
    return this.http.get<CandidateResponse[]>(`${this.baseUrl}/getAll`);
  }
    //save candidate response
    public saveCandidateResponse(candidateResponse:CandidateResponse):Observable<CandidateResponse>{
      return this.http.post<CandidateResponse>(`${this.baseUrl}/add`,candidateResponse);
    }
}
