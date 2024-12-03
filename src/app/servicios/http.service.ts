import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../modelos/post';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpClient = inject(HttpClient);

  posts: Post[] = [];

  constructor() {
   }

   getPosts() {
    return this.httpClient.request<Post[]>('GET', 'http://localhost:3000/posts', {responseType:'json'});
   }

}
