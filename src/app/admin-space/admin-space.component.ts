import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.css'],
  animations: [
    trigger('buttonClickAnimation', [
      state('clicked', style({ transform: 'translateY(4px)' })),
      transition('* => clicked', [animate('0.2s ease-out')]),
    ]),
  ],
  
})
export class AdminSpaceComponent {

  buttonState: string | null = null;

  constructor(private router:Router) { }

  //Redirect to User Managment
  public redirectToManageUsers(){
    this.router.navigate(['/user-managment']);
  }

  //Redirect to Question Managment
  public redirectToManageQuestions(){
    this.router.navigate(['/question-managment']);
  }

  //Redirect to Quiz Managment
  public redirectToManageQuizzes(){
    this.router.navigate(['/quiz-managment']);
  }


  handleClick(buttonId: string) {
    this.buttonState = buttonId;
    setTimeout(() => {
      this.buttonState = null; // Reset the animation state
    }, 200); // Adjust the timing to match your animation duration
  }

}
