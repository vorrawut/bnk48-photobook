// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  memberlist: Member[];

  constructor(private _bnkService: BnkService) { }

  ngOnInit() {
    this._bnkService.list().subscribe(data => this.memberlist = data);
  }

  edit(member: Member) {
    console.log(member);
  }

}
