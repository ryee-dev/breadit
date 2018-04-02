import { Component, OnInit } from '@angular/core';
import { Subbreaddit } from '../models/subbreaddit.model';
import { SubbreadditService } from '../subbreaddit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SubbreadditService]
})
export class HeaderComponent implements OnInit {
  subList: Subbreaddit[] = this.subbreadditService.subbreadditList;
  constructor(private router: Router, private subbreadditService: SubbreadditService) { }
  ngOnInit() {
   }

  goToSub(clickedSub: Subbreaddit) {
    // this.subList = SubbreadditService.subbreadditList;
    SubbreadditService.currentSub = clickedSub;
    this.router.navigate(['b', clickedSub.name]);
  }

}
