import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-of-candidate',
  templateUrl: './home-page-of-candidate.component.html',
  styleUrls: ['./home-page-of-candidate.component.css']
})
export class HomePageOfCandidateComponent {

  constructor(private router:Router) {}

  redirectToQuizzes(){
    this.router.navigate(['/list-quizzes-for-candidate']);
  }

}
