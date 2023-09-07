import { Component } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../interfaces/quiz';
import { Question } from '../interfaces/question';

@Component({
  selector: 'app-update-quiz',
  template: `
  <div class="quiz-management">

  <div class="form-popup" [ngStyle]="{ display: isFormVisible ? 'block' : 'none' }">
    <div class="form-container">
      <h2>update Quiz</h2>
      <label for="quizDescription">Description</label>
      <input type="text" id="quizDescription" name="quizDescription" [(ngModel)]="quiz.description">
      <button class="btn save-button" (click)="updateQuiz(quiz)">update Quiz</button>
      <button class="btn cancel" (click)="toggleForm()">Close</button>
    </div>
  </div>
</div>`,
  styles: [`
  .quiz-management {
    text-align: center;
  }

  .update-quiz-button {
    background-color: #555;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }

  .form-popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .form-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }

  .save-button {
    background-color: #04AA6D;
    color: white;
  }

  .cancel {
    background-color: red;
    color: white;
  }
`]
})
export class UpdateQuizComponent {

  questions: Question[] = [];

  quiz: Quiz = {
    id:0,
    description: '',
    questions: this.questions
  };

  isFormVisible: boolean = false;

  quizId:number=0;
  quizDescription='';

  constructor(private quizService: QuizService,private router :Router,private route:ActivatedRoute) { 
    this.toggleForm();
    this.route.queryParams.subscribe(params => {
      this.quizId = params['quizId'];
      this.quizDescription = params['quizDescription'];
    });

  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    if(this.isFormVisible==false){
      this.router.navigate(['/list-quizzes']);
    }
  }

  updateQuiz(quiz: Quiz) {
    this.quizService.updateQuiz(quiz,this.quizId).subscribe(
      (response: Quiz) => {
        console.log('Quiz updated successfully!', response);
      },
      (error: Error) => {
        console.log('Error updating quiz!', error);
      }
    );
  }

  saveQuiz() {
    this.updateQuiz(this.quiz);
    this.toggleForm();
    this.router.navigate(['/list-quizzes']);
  }

}
