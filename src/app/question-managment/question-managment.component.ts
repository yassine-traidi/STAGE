import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-managment',
  templateUrl: './question-managment.component.html',
  styleUrls: ['./question-managment.component.css']
})
export class QuestionManagmentComponent {

  constructor(private router:Router) { }

  public redirectToAddQuestion(){
    this.router.navigate(['/add-question']);
  }

  public redirectToListQuestions(){
    this.router.navigate(['/list-questions']);
  }



}
