import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; 
import { Ng2SearchPipeModule }  from 'ng2-search-filter';
import { AppComponent }         from './app.component';
import { CommentComponent }     from './comment_page/comment.component';
import { PostComponent }        from './post_page/post.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: 'comment', component: CommentComponent },
  { path: 'post', component: PostComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipeModule, HttpClientModule,          RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, CommentComponent, PostComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

