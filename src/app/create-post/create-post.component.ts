import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { SubbreadditService } from '../subbreaddit.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  providers: [SubbreadditService]
})
export class CreatePostComponent implements OnInit {

  constructor(private subbreadditService: SubbreadditService) { }

  ngOnInit() {
  }

  // createNewPost(url: string, title: string, text: string, sub: string) {
  //   const newPost = new Post(url, title, text, sub);
  //   SubbreadditService.postList.push(newPost);
  // }

}
