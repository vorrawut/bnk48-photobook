// Angular
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

// Services
import { AdminService } from '../../services/admin.service';

// Models
import { Member } from '../../models/member';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-admin-member-edit',
  templateUrl: './admin-member-edit.component.html',
  styleUrls: ['./admin-member-edit.component.css']
})
export class AdminMemberEditComponent implements OnInit {

  member: FormGroup;

  constructor(private _fb: FormBuilder, private _location: Location, private _admin: AdminService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.member = this._fb.group({
      name: '',
      imageUrl: '',
      instagramId: ''
    });

    this.getMemberDetail();
  }

  getMemberDetail() {
    const memberId = this.route.snapshot.paramMap.get('memberId');
    this._admin.getMemberDetailById(memberId)
      .subscribe(data => {
        this.member.setValue({
          name: data.name,
          imageUrl: data.imgUrl,
          instagramId: data.instagramId,
        });
      },
        error => alert(error.message));
  }

  save() {

  }

  reset() {

  }

  goBack() {
    this._location.back();
  }

}
