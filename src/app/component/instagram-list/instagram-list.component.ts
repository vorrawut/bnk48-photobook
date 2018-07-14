// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {

  constructor(private _bnkService: BnkService) { }

  ngOnInit() {
  }

}
