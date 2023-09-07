import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionManagmentComponent } from './question-managment/question-managment.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { QuizManagmentComponent } from './quiz-managment/quiz-managment.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { ListQuizzesComponent } from './list-quizzes/list-quizzes.component';
import { ListQuestionsOfQuizComponent } from './list-questions-of-quiz/list-questions-of-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { ListSubmissionsComponent } from './list-submissions/list-submissions.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserAnswersComponent } from './user-answers/user-answers.component';
import { ListQuizzesForCandidateComponent } from './candidate-space/list-quizzes-for-candidate/list-quizzes-for-candidate.component';
import { QuizSpaceComponent } from './candidate-space/quiz-space/quiz-space.component';
import { HomePageOfCandidateComponent } from './candidate-space/home-page-of-candidate/home-page-of-candidate.component';

const routes: Routes = [
  {path:'', redirectTo: '/home-page', pathMatch: 'full' },
  {path:'user-managment',component:UserManagmentComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'admin-space',component:AdminSpaceComponent},
  {path:'list-users',component:ListUsersComponent},
  {path:'update-user',component:UpdateUserComponent},
  {path:'add-question',component:AddQuestionComponent},
  {path:'question-managment',component:QuestionManagmentComponent},
  {path:'list-questions',component:ListQuestionsComponent},
  {path:'quiz-managment',component:QuizManagmentComponent},
  {path:'add-quiz',component:AddQuizComponent},
  {path:'list-quizzes',component:ListQuizzesComponent},
  {path:'list-questions-of-quiz',component:ListQuestionsOfQuizComponent},
  {path:'update-quiz',component:UpdateQuizComponent},
  {path:'list-submissions',component:ListSubmissionsComponent},
  {path:'user-details',component:UserDetailsComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'user-answers',component:UserAnswersComponent},
  {path:'list-quizzes-for-candidate',component:ListQuizzesForCandidateComponent},
  {path:'quiz-space',component:QuizSpaceComponent},
  {path:'home-page-of-candidate',component:HomePageOfCandidateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
