import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Score } from '../interfaces/score';
import { QuizService } from '../services/quiz.service';
import { Question } from '../interfaces/question';
import { Subscription } from 'rxjs';
import { QuestionService } from '../services/question.service';
 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  scores:Score[]=[];

  tooltipVisible = false;
  tooltipText = '';

  questions:Question[]=[];

  private subscriptions: Subscription[] = [];

  constructor(private scoreService:ScoreService,private router:Router,private quizService:QuizService,
    private questionService:QuestionService) {
    
   }
  ngOnInit(){
    this.listScores();
    this.getQuestions();
  }

  //list all scores
  listScores(){
    this.scoreService.ListScores().subscribe(
      (response:Score[])=>{
        this.scores=response;
        console.log('Submissions listed successfully !',response);
      }
    ),
    (error:any)=>{
      console.log('Error retrieving submissions !',error);
    }
  }

  
  showTooltip(username: string): void {
    this.tooltipText = username;
    this.tooltipVisible = true;
  }

  hideTooltip(): void {
    this.tooltipVisible = false;
  }

  redirectToDetails(id:number,userId:number){
    this.router.navigate(['/user-answers'],{queryParams:{quizId:id, userId:userId}});
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



  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
  

  



