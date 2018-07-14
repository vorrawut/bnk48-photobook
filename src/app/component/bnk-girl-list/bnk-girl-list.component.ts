import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {

  members: Member[];

  constructor() { }

  ngOnInit() {
  }

}
