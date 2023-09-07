import { Component ,OnInit} from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../interfaces/quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-quizzes',
  templateUrl: './list-quizzes.component.html',
  styleUrls: ['./list-quizzes.component.css']
})
export class ListQuizzesComponent implements OnInit{

  quizzes:Quiz[]=[];

  constructor(private quizService:QuizService,private router:Router) { }
  ngOnInit(){
    this.listQuizzes();
  }

  //list all quizzes 
  public listQuizzes(){
    this.quizService.listQuizzes().subscribe(
      (response:Quiz[])=>{
        this.quizzes=response;
        console.log('Listed quizzes successfully !',response);
      }
    ),
    (error:Error)=>{
      console.log('Error listing quizzes !',error);
    }
  }

  showQuestions(quiz:Quiz){
    this.router.navigate(['/list-questions-of-quiz'],{ queryParams: { quizId: quiz.id ,quizDescription:quiz.description} });
  }

  editQuiz(quiz:Quiz){
    this.router.navigate(['/update-quiz'],{ queryParams: { quizId: quiz.id , quizDescription:quiz.description }});
  }

  deleteQuiz(quiz:Quiz){
    this.quizService.deleteQuiz(quiz.id).subscribe(
      (response:void)=>{
        console.log('Quiz deleted successfully !',response);
        this.ngOnInit();
      }
    ),
    (error:Error)=>{
      console.log('Error deleting quiz !',error);
    }
  }

  addQuestions(quiz:Quiz){ 
    this.router.navigate(['/add-question'],{ queryParams: { quizId: quiz.id , quizDescription:quiz.description , quizQuestions:quiz.questions } });
    console.log(quiz.id);
   }




}
