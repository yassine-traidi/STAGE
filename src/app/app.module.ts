import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { QuestionManagmentComponent } from './question-managment/question-managment.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QuizManagmentComponent } from './quiz-managment/quiz-managment.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { ListQuizzesComponent } from './list-quizzes/list-quizzes.component';
import { ListQuestionsOfQuizComponent } from './list-questions-of-quiz/list-questions-of-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { ListSubmissionsComponent } from './list-submissions/list-submissions.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserAnswersComponent } from './user-answers/user-answers.component';
import { NavbarComponent } from './candidate-space/navbar/navbar.component';
import { FooterComponent } from './candidate-space/footer/footer.component';
import { ListQuizzesForCandidateComponent } from './candidate-space/list-quizzes-for-candidate/list-quizzes-for-candidate.component';
import { QuizSpaceComponent } from './candidate-space/quiz-space/quiz-space.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { HomePageOfCandidateComponent } from './candidate-space/home-page-of-candidate/home-page-of-candidate.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    AdminSpaceComponent,
    UserManagmentComponent,
    AddUserComponent,
    ListUsersComponent,
    UpdateUserComponent,
    QuestionManagmentComponent,
    AddQuestionComponent,
    ListQuestionsComponent,
    QuizManagmentComponent,
    AddQuizComponent,
    ListQuizzesComponent,
    ListQuestionsOfQuizComponent,
    UpdateQuizComponent,
    ListSubmissionsComponent,
    UserDetailsComponent,
    HomePageComponent,
    UserAnswersComponent,
    NavbarComponent,
    FooterComponent,
    ListQuizzesForCandidateComponent,
    QuizSpaceComponent,
    HomePageOfCandidateComponent,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
