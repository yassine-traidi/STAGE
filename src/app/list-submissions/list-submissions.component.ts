import { Component ,OnInit } from '@angular/core';
import { CandidateResponseService } from '../services/candidate-response.service';
import { CandidateResponse } from '../interfaces/candidateResponse';
import { Answer } from '../interfaces/answer';

@Component({
  selector: 'app-list-submissions',
  templateUrl: './list-submissions.component.html',
  styleUrls: ['./list-submissions.component.css']
})
export class ListSubmissionsComponent implements OnInit{

  candidateRespones:CandidateResponse[]=[];

  constructor(private candidateResponseService:CandidateResponseService) { } 
  ngOnInit(){
    this.listSubmissions();
  }


  //list all submissiosn
  listSubmissions(){
    this.candidateResponseService.lisCandidateResponses().subscribe(
      (response :CandidateResponse[])=>{
        this.candidateRespones=response;
        console.log('Submissions listed successfully !',response);
      }
    ),
    (error:Error)=>{
      console.log('Error listing submissions !',error);
    }
  }


}
