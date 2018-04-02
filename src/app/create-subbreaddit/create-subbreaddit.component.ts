import { Component, OnInit } from '@angular/core';
import { Subbreaddit } from '../models/subbreaddit.model';
import { SubbreadditService } from '../subbreaddit.service';

@Component({
  selector: 'app-create-subbreaddit',
  templateUrl: './create-subbreaddit.component.html',
  styleUrls: ['./create-subbreaddit.component.css'],
  providers: [SubbreadditService]
})

export class CreateSubbreadditComponent implements OnInit {
    constructor(private subbreadditService: SubbreadditService) { }

    ngOnInit() {
    }

    createNewSub(name: string, title: string, description: string, sidebar: string, submissionText: string, background: string) {
      const newSub: Subbreaddit = new Subbreaddit(name, title, description, sidebar, background);
      // let isUnique = false;
      console.log(SubbreadditService.subbreadditList[0].name);

      for (let i; i < SubbreadditService.subbreadditList.length; i++) {
        // console.log(isUnique);
        if (name !== SubbreadditService.subbreadditList[i].name) {
          alert('works');
          // isUnique = true;
        }
      }
      // if (isUnique === false) {
      SubbreadditService.subbreadditList.push(newSub);
      console.log(SubbreadditService.subbreadditList);
      // }
      console.log(SubbreadditService.subbreadditList);
    }

  }
