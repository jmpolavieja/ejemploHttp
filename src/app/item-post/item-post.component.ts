import { Component, Input } from '@angular/core';
import { Post } from '../modelos/post';

@Component({
  selector: 'app-item-post',
  standalone: true,
  imports: [],
  templateUrl: './item-post.component.html',
  styleUrl: './item-post.component.css'
})
export class ItemPostComponent {

  @Input() post!: Post;
  
}
