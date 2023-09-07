import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { Score } from '../interfaces/score';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private scoreService:ScoreService,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      this.username = params['username'];
    });
  }

  ngOnInit(){
    this.listScores();
    console.log(this.scoresOfUser);
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




}
