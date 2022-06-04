import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PostsComponent } from './views/posts/posts.component';
import { UserComponent } from './views/user/user.component';

import { PostsService } from './services/posts.service';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SinglePostComponent } from './views/single-post/single-post.component';
import { SingleGetComponent } from './views/single-get/single-get.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProfileComponent,
    PostsComponent,
    UserComponent,
  
    SinglePostComponent,
       SingleGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
