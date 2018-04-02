import { Injectable } from '@angular/core';
import { Subbreaddit } from './models/subbreaddit.model';

@Injectable()
export class SubbreadditService {

  static currentSub: Subbreaddit;

  static subbreadditList: Subbreaddit[] = [
    new Subbreaddit('bakery', '/b/bakery', 'subbreaddit for all things bakery-related', '(sidebar text)', 'yellow'),
    new Subbreaddit('ovens', '/b/ovens', 'subbreaddit for all things oven-related', '(sidebar text)', 'red')
  ];
  constructor() { }

  getSubByName(name) {
    for(let i = 0; i < SubbreadditService.subbreadditList.length; i++) {
      if (SubbreadditService.subbreadditList[i].name === name) {
        return SubbreadditService.subbreadditList[i];
      }
    }
  }
}
