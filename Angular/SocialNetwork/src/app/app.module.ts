import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostComponent } from "./post/post.component";
import { CommentContainerComponent } from "./comment-container/comment-container.component";
import { LinkContainerComponent } from "./link-container/link-container.component";
import { PostContainerComponent } from "./post-container/post-container.component";
import { CommentFormComponent } from "./comment-form/comment-form.component";
import { LikeContainerComponent } from "./like-container/like-container.component";
import { CommentComponent } from './comment/comment.component';
import { CommentsToggleComponent } from './comments-toggle/comments-toggle.component';
import { PostContainerFeedComponent } from './post-container-feed/post-container-feed.component';
import { PostFormComponent } from './post-form/post-form.component';
import { UserContentInputFormComponent } from './user-content-input-form/user-content-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentContainerComponent,
    LinkContainerComponent,
    PostContainerComponent,
    CommentFormComponent,
    LikeContainerComponent,
    CommentComponent,
    CommentsToggleComponent,
    PostContainerFeedComponent,
    PostFormComponent,
    UserContentInputFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
