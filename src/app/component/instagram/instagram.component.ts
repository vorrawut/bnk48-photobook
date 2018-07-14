// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  memberName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.memberName = this.route.snapshot.paramMap.get('instagramId');
  }

}
