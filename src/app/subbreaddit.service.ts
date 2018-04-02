import { Injectable } from '@angular/core';
import { Subbreaddit } from './models/subbreaddit.model';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SubbreadditService {
  static currentUser: string;
  static currentSub: Subbreaddit;

  static subbreadditList: Subbreaddit[] = FirebaseListObservable<any[]>;

  static postList: Post[] = [
    new Post('www.bread.com', 'Bread Resources', '(insert text here)', 'bakery')
  ];
  constructor(private database: AngularFireDatabase) { }

  getSubByName(name) {
    for (let i = 0; i < SubbreadditService.subbreadditList.length; i++) {
      if (SubbreadditService.subbreadditList[i].name === name) {
        return SubbreadditService.subbreadditList[i];
      }
    }
  }
}
