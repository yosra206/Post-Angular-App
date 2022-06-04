import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './views/single-post/single-post.component';

import { AboutComponent } from './views/about/about.component';
import { PostsComponent } from './views/posts/posts.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UserComponent } from './views/user/user.component';
import { SingleGetComponent } from './views/single-get/single-get.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'profile',component:ProfileComponent},
  {path:'posts',component:PostsComponent},
  {path:'about',component:AboutComponent},
  {path:'singlepost/:id',component:SinglePostComponent},
  {path:'singleGet/:id',component:SingleGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
