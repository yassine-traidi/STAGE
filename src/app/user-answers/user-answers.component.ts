import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ScoreService } from '../services/score.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';
import { Question } from '../interfaces/question';
import { Quiz } from '../interfaces/quiz';
import { User } from '../interfaces/user';
import { Answer } from '../interfaces/answer';

@Component({
  selector: 'app-user-answers',
  templateUrl: './user-answers.component.html',
  styleUrls: ['./user-answers.component.css']
})
export class UserAnswersComponent {

  quizId=0;

  questions:Question[]=[];

  chosenAnswers:Answer[]=[];

  quiz:Quiz={
    id:0,
    description:'',
    questions:[],
  }
  candidate:User={
    id:0,
    username:'',
    email:'',
    phone:'',
    answers:[],
  }

  userId:number=0;

  constructor(private quizService:QuizService,private questionService:QuestionService
  ,private userService:UserService,private scoreService:ScoreService,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.quizId = params['quizId'];
      this.userId = params['userId'];
      console.log(this.quizId);  
   })
   this.getQuizById(this.quizId);
   this.getCandidate(this.userId);
  }

    //list questions of a specific quiz by ID
    listQuestions(id:number){
      this.quizService.listQuestionsOfQuiz(this.quizId).subscribe(
        (response:Question[])=>{
          this.quiz.questions=response;
          this.questions=response;
          console.log('Questions listed successfully !',response);
          
        }
      ),
      (error:Error)=>{
        console.log('Error listing questions !',error);
      }
    }

    getQuizById(id:number){
      this.quizService.listQuestionsOfQuiz(id).subscribe(
        (response:Question[])=>{
          this.questions=response;
          console.log(response);
        }
      ),
      (error:any)=>{
        console.log('error fetching questions',error);
      }
      this.quizService.getQuizById(id).subscribe(
        (response:Quiz)=>{
          this.quiz.id=response.id;
          this.quiz.description=response.description;
          this.quiz.questions=this.questions;
          console.log(this.quiz);
        }
      ),
      (error:any)=>{
        console.log('error :',error);
      }
    }

    getCandidate(id:number){
      this.userService.getUser(id).subscribe(
        (response:User)=>{
          this.candidate.id=response.id;
          this.candidate.email=response.email;
          this.candidate.username=response.username;
          this.candidate.phone=response.phone;
          this.candidate.answers=response.answers;

          console.log('chosen answers :',this.candidate.answers);
        }
      ),
      (error:any)=>{
        console.log('error :',error);
      }
    }
    isAnswerChosen(candidate: User, answer: Answer): boolean {
      return candidate.answers.some(candidateAnswer => candidateAnswer.id === answer.id);
    }
    
    



}
