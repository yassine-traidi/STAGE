import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Score } from '../interfaces/score';
import { QuizService } from '../services/quiz.service';
import { Question } from '../interfaces/question';
 

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

  constructor(private scoreService:ScoreService,private router:Router,private quizService:QuizService) {
    
   }
  ngOnInit(){
    this.listScores();
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

  countQuestionsOfQuiz(id: number):number{
    this.quizService.listQuestionsOfQuiz(id).subscribe(
      (response:Question[])=>{
        this.questions=response;
      }
    ),
    (error:any)=>{

      console.log(error);
    }

    return this.questions.length;
  }
}
  

  



