import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '' , redirectTo:'mentor', pathMatch:'full'
  },
  {
    path: 'user', loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule)
  },
  { 
    path: 'resume', loadChildren: () => import('./feature/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) 
  },
  {
    path: 'users', loadChildren: () => import('./feature/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'todo', loadChildren: () => import('./feature/todo-list/todo-list.module').then(m => m.TodoListModule)
  },
  {
    path: 'trial', loadChildren: () => import('./feature/trial/trial.module').then(m => m.TrialModule)
  },
  { path: 'comm', loadChildren: () => import('./feature/sibling/sibling.module').then(m => m.SiblingModule) },
  { path: 'mentor', loadChildren: () => import('./feature/mentor/mentor.module').then(m => m.MentorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
