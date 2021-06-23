import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PostsComponent } from '../components/posts/posts.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { GuardsGuard } from './guards.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [GuardsGuard]
  },
  { path: '**', component: NotFoundComponent }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
