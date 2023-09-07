import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-managment',
  templateUrl: './quiz-managment.component.html',
  styleUrls: ['./quiz-managment.component.css']
})
export class QuizManagmentComponent {

  constructor(private router:Router) { }

  //Redirect to add quiz
  public redirectToAddQuiz(){
    this.router.navigate(['/add-quiz']);
  }

  //redirect to list quizzes
  public redirectToListQuizzes(){
    this.router.navigate(['/list-quizzes']);
  }

}
