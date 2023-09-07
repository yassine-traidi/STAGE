import { Component } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../interfaces/quiz';
import { Question } from '../interfaces/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-quiz',
  template: `
    <body class="container">
    <div class="quiz-management">
      <!-- Popup Form -->
      <div class="form-popup" [ngStyle]="{ display: isFormVisible ? 'block' : 'none' }">
        <div class="form-container">
          <h2>Add Quiz</h2>

          <!-- Quiz Description Input -->
          <label for="quizDescription">Description</label>
          <input type="text" id="quizDescription" name="quizDescription" [(ngModel)]="quiz.description">

          <!-- Save Button -->
          <button class="btn save-button" (click)="saveQuiz()">Save Quiz</button>

          <!-- Close Button -->
          <button class="btn cancel" (click)="toggleForm()">Close</button>
        </div>
      </div>
    </div>
</body>
  `,
  styles: [`
    .quiz-management {
      text-align: center;
    }

    .add-quiz-button {
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
export class AddQuizComponent {

  questions: Question[] = [];

  quiz: Quiz = {
    id:0,
    description: '',
    questions: this.questions
  };

  isFormVisible: boolean = false;

  constructor(private quizService: QuizService,private router :Router) { 
    this.toggleForm();
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    if(this.isFormVisible==false){
      this.router.navigate(['/list-quizzes']);
    }
  }

  addQuiz(quiz: Quiz) {
    this.quizService.addQuiz(quiz).subscribe(
      (response: Quiz) => {
        console.log('Quiz added successfully!', response);
      },
      (error: Error) => {
        console.log('Error adding quiz!', error);
      }
    );
  }

  saveQuiz() {
    this.addQuiz(this.quiz);
    this.toggleForm();
    this.router.navigate(['/list-quizzes']);
  }

}
