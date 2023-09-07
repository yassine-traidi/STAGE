import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../interfaces/question';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {

  public questions:Question[]=[];

  constructor(private questionService:QuestionService){}
  ngOnInit() {
    this.getQuestions();
  }

  public getQuestions(){
    return this.questionService.listQuestions().subscribe(
      (response:Question[])=>{
        this.questions=response;
      }
    ),
    (error:Error)=>{
      console.log("error getting questions !",error);
    }
  }

  editQuestion(id:number){}

  deleteQuestion(id:number){
    return this.questionService.deleteQuestion(id).subscribe(
      (response:void)=>{
        console.log('question deleted successfully !');
      }
    ),
    (error:Error)=>{
      console.log('error deleting question !',error);
    }
  }

}
