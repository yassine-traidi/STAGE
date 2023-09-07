import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../interfaces/question';
import { Answer } from '../interfaces/answer';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Quiz } from '../interfaces/quiz';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit{

  answers: Answer[] = [];
  newAnswerContent: string = '';
  newAnswerValue: boolean = false;

  quizId:number=0
  quizDescription='';
  quizQuestions:Question []=[];

  quiz: Quiz ={
    id:this.quizId,
    description:this.quizDescription,
    questions:this.quizQuestions
  }
  
  question: Question = {
    content: '',
    link: '',
    answers: [],
    id: 0,
    quiz:this.quiz
  };

  output='';
  outputColor: string = ''; 
  messageType='failed';


  

  constructor(private questionService: QuestionService, private quizService: QuizService, private route: ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params => {
      this.quizId = params['quizId'];
      console.log(this.quizId);
      this.quizDescription = params['quizDescription'];
      this.quizQuestions = params['quizQuestions']; 
    });
  }
  ngOnInit(): void {
    
  }



  public saveQuestionAndGetId() {
    this.quiz.id = this.quizId;
    this.questionService.addQuestion(this.question).subscribe(
      (questionResponse: Question) => {
        this.question.id = questionResponse.id;
        this.question.quiz = this.quiz;
        console.log(this.question);
        console.log('Question added successfully !', questionResponse);
        this.saveAnswers(this.question);
        this.addQuestionToQuiz(this.question);
        this.setOutputMessage('Question added successfully !', 'success');
  
        
        setTimeout(() => {
          location.reload();;
        }, 2000);
      },
      (error: Error) => {
        console.log('Error adding question!', error);
        this.output = 'Error adding question !';
        this.messageType = 'failed';
      }
    );
    this.output = '';
  }


  private navigateToSamePage() {
    this.router.navigate([], {
      relativeTo: this.route, 
      queryParamsHandling: 'preserve', // Preserve existing query parameters
    });
  }


  private saveAnswers(question: Question) {
    const answerObservables = this.answers.map(answer => {
      answer.question = question;
      answer.question_id = question.id;
      return this.questionService.addAnswer(answer, question.id);
    });
  
    if (answerObservables.length === 0) {
      return;
    }
  
    forkJoin(answerObservables).subscribe(
      (answerResponses: Answer[]) => {
        console.log('All answers added successfully!', answerResponses);
      },
      (error: Error) => {
        console.log('Error adding answers!', error);
      }
    );
  }
  

  public addQuestionToQuiz(question: Question) {
    this.quizService.addQuestionToQuiz(this.quizId, question).subscribe(
      (response: Question) => {
        console.log('Question added successfully to quiz!', response);
        /*if (this.answers.length > 0) {
          const answerObservables = this.answers.map(answer => {
            return this.questionService.addAnswer(answer, question.id);
          });
  
          forkJoin(answerObservables).subscribe(
            (answerResponses: Answer[]) => {
              console.log('All answers added successfully!', answerResponses);
            },
            (error: Error) => {
              console.log('Error adding answers!', error);
            }
          );
        }*/
      },
      (error: Error) => {
        console.log('Error adding question to quiz!', error);
      }
    );
  }
  


  public addNewAnswer() {
    if (this.newAnswerContent !== '') {
      const newAnswer: Answer = {
        content: this.newAnswerContent,
        value: this.newAnswerValue,
        question_id: this.question.id
      };

      this.answers.push(newAnswer);

      this.newAnswerContent = '';
      this.newAnswerValue = false;
    }
  }

  private setOutputMessage(message: string, messageType: string) {
    this.output = message;
    this.messageType = messageType; 
  }
}
