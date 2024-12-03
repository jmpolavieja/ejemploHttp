import { Routes } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { CommentsComponent } from './comments/comments.component';

export const routes: Routes = [
  { path: 'posts', component: ListPostsComponent },
  { path: 'comments', component: CommentsComponent  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts', pathMatch: 'full' }
];
