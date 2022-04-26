import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  {
    path: '' , redirectTo:'trial', pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent
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

  { path: 'comma', loadChildren: () => import('./feature/mvpmodule/mvpmodule.module').then(m => m.MvpmoduleModule) },
  // { path: 'mentor', loadChildren: () => import('./feature/mentor/mentor.module').then(m => m.MentorModule) }
  { path: 'mvp', loadChildren: () => import('./feature/mvp-demo/mvp-demo.module').then(m => m.MvpDemoModule) },
  { path: 'file-upload', loadChildren: () => import('./feature/file/file.module').then(m => m.FileModule) },
  { path: 'file', loadChildren: () => import('./feature/dnd-file-upload/dnd-file-upload.module').then(m => m.DndFileUploadModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
