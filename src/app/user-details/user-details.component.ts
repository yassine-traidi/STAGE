import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { Score } from '../interfaces/score';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Question } from '../interfaces/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  scores:Score[]=[];

  userId:number=0;
  username:string='';
  scoresOfUser:Score[]=[];

  questions:Question[]=[]



  constructor(private scoreService:ScoreService,private route:ActivatedRoute,private quizService:QuizService,private router:Router,
    private questionService:QuestionService) { 
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      this.username = params['username'];
    });
  }

  ngOnInit(){
    this.listScores();
    console.log(this.scoresOfUser);
    this.getQuestions();
    }

  //list all scores
  listScores(){
    this.scoreService.ListScores().subscribe(
      (response:Score[])=>{
        console.log('scores listed !',response);
        this.scores=response;
        this.listScoresOfUser();
      }
    ),
    (error:any)=>{
      console.log(error);
    }
  }

  //list Scores of User
  listScoresOfUser(){
    
    for(const score of this.scores){
      console.log("scores user id",score.user.id);
      console.log("current user ID",this.userId);
      if(score.user.id==this.userId){
        this.scoresOfUser.push(score);
      }
    }
    console.log(this.scoresOfUser);
  }

  getQuestions(){
    this.questionService.getAll().subscribe(
      (response:Question[])=>{
        this.questions=response;
      }
    ),
    (error:any)=>{
      console.log('error !',error);
    }
  }

  countQuestions(id:number):number{
    let total=0;
    for(const question of this.questions){
      if(question.quiz?.id==id){
        total+=1;
      }
    }
    return total;
  }

  redirectToDetails(id:number,userId:number){
    this.router.navigate(['/user-answers'],{queryParams:{quizId:id, userId:userId}});
  }




}
