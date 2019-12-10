import { QuizComponent } from './components/quiz/quiz.component';
import { ApiComponent } from './components/api/api.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'api',
    component: ApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
