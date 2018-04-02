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
      // const newSub: Subbreaddit = new Subbreaddit(name, title, description, sidebar, background);
      this.subbreadditService.addSub(new Subbreaddit(name, title, description, sidebar));
      console.log(this.subbreadditService.subs);
    }

  }
