// Angular
import { Component, OnInit, Input } from '@angular/core';

// Service
import { BnkService } from '../../services/bnk.service';

// Models
import { Feed } from '../../models/feed';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {

  feed: Feed;

  @Input() member: string;

  constructor(private _bnkService: BnkService) { }

  ngOnInit() {
    this._bnkService.instagram(this.member).subscribe(data => this.feed = data);
  }

}
