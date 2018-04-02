import { Injectable } from '@angular/core';
import { Subbreaddit } from './models/subbreaddit.model';

@Injectable()
export class SubbreadditService {

  static subbreadditList: Subbreaddit[] = [
    new Subbreaddit('bakery', '/b/bakery', 'subbreaddit for all things bakery-related', '(sidebar text)', 'yellow')
  ];
  constructor() { }

}
