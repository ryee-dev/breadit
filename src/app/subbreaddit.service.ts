import { Injectable } from '@angular/core';
import { Subbreaddit } from './models/subbreaddit.model';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SubbreadditService {
  static currentUser: string;
  static currentSub: Subbreaddit;

  subs: FirebaseListObservable<any[]>;
  subbreadditList: Subbreaddit[] = [];

  // static postList: Post[] = [
  //   new Post('www.bread.com', 'Bread Resources', '(insert text here)', 'bakery')
  // ];
  constructor(private database: AngularFireDatabase) {
    this.subs = database.list('subbreddits');
    this.subs.subscribe((dataArray) => {
      this.subbreadditList.length = 0;
      dataArray.forEach((data) => {
        const newSub: Subbreaddit = new Subbreaddit(data.name, data.title, data.description, data.sidebar, data.background);
        // newSub.key = data.$key;
        this.subbreadditList.push(newSub);
      });
    });
  }
  addSub(newSub: Subbreaddit) {
    this.subs.push(newSub);
  }
  getSubByName(name) {
    for (let i = 0; i < this.subbreadditList.length; i++) {
      if (this.subbreadditList[i].name === name) {
        return this.subbreadditList[i];
      }
    }
  }
}
