import { Component, OnInit } from '@angular/core';
import { Subbreaddit } from '../models/subbreaddit.model';
import { SubbreadditService } from '../subbreaddit.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-sub',
  templateUrl: './view-sub.component.html',
  styleUrls: ['./view-sub.component.css'],
  providers: [SubbreadditService]
})
export class ViewSubComponent implements OnInit {
  currentSub: Subbreaddit = SubbreadditService.currentSub;
  constructor(private route: ActivatedRoute, private subbreadditService: SubbreadditService, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.currentSub = this.subbreadditService.getSubByName(urlParameters['name'])
   });
  }

}
