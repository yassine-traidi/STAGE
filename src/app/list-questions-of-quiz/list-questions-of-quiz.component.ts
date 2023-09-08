import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../interfaces/quiz';
import { Question } from '../interfaces/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-list-questions-of-quiz',
  templateUrl: './list-questions-of-quiz.component.html',
  styleUrls: ['./list-questions-of-quiz.component.css']
})
export class ListQuestionsOfQuizComponent implements OnInit {

  questions: Question[] = [];
  quizId: number = 0;
  quizDescription = '';


  constructor(private quizService: QuizService, private route: ActivatedRoute,private questionService:QuestionService) {
    this.route.queryParams.subscribe(params => {
      this.quizId = params['quizId'];
      this.quizDescription = params['quizDescription'];
    });
  }

  quiz:Quiz={
    description:this.quizDescription,
    id:this.quizId,
    questions:this.questions
  }

  ngOnInit() {
    this.listQuestionsOfQuiz(this.quizId);
  }

  // list questions of quiz
  listQuestionsOfQuiz(id:number) {
    this.quizService.listQuestionsOfQuiz(id).subscribe(
      (response: Question[]) => {
        console.log(response);
        this.questions = response;
        this.quiz.questions = response;
        console.log('Questions of quiz listed successfully !', response);
      },
      (error: Error) => {
        console.log('Error listing questions !', error);
      }
    );
  }

  //delete question
  public deleteQuestion(question:Question){
    this.questionService.deleteQuestion(question.id).subscribe(
      (response:void)=>{
        console.log('Question deleted successfully !');
      }
    ),
    (error:Error)=>{
      console.log('Error deleting question !',error);
    }
  }
}

