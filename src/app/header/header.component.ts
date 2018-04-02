import { Component, OnInit } from '@angular/core';
import { Subbreaddit } from '../models/subbreaddit.model';
import { SubbreadditService } from '../subbreaddit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SubbreadditService]
})
export class HeaderComponent implements OnInit {
  subList: Subbreaddit[];
  constructor(private subbreadditService: SubbreadditService) { }
  ngOnInit() {
   }
   subList = SubbreadditService.subbreadditList;

}
