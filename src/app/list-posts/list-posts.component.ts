import { Component, inject } from '@angular/core';
import { HttpService } from '../servicios/http.service';
import { Post } from '../modelos/post';
import { ItemPostComponent } from "../item-post/item-post.component";

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [ItemPostComponent],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
  httpService: HttpService = inject(HttpService);
  posts: Post[] = [];

  constructor(){
    this.getPosts();
  }

  getPosts() {
    this.httpService.getPosts().subscribe(resp => {
      console.log(resp);

      this.posts = resp;
    } )
  }
}
