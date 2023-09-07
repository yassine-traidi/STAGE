import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/interfaces/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-list-quizzes-for-candidate',
  templateUrl: './list-quizzes-for-candidate.component.html',
  styleUrls: ['./list-quizzes-for-candidate.component.css']
})
export class ListQuizzesForCandidateComponent {
  quizzes:Quiz[]=[]

  constructor(private quizService:QuizService,private router:Router) { }
  ngOnInit(){
    this.lisQuizzes();
  }

  //list Quizzes
  lisQuizzes(){
    this.quizService.listQuizzes().subscribe(
      (response:Quiz[])=>{
        this.quizzes=response;
        console.log('Quizzes listed successfully !',response);
      }
    ),
    (error:Error)=>{
      console.log('Error listing quizzes !',error);
    }
  }

  //start quiz button
  redirectToQuiz(quiz:Quiz){
    console.log(quiz.questions);
    this.router.navigate(['/quiz-space'],{ queryParams: { quizId: quiz.id ,quizDescription:quiz.description} });
  }
}
