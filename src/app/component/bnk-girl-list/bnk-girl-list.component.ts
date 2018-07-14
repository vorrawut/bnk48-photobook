// Angular
import { Component, OnInit } from '@angular/core';

// Models
import { Member } from '../../models/member';

// Service
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {

  members: Member[];

  constructor(private _bnkService: BnkService) { }

  ngOnInit() {
    this._bnkService.list().subscribe(data => this.members = data);
  }

}
