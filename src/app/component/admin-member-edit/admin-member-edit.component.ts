// Angular
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

// Services
import { AdminService } from '../../services/admin.service';

// Models
import { Member } from '../../models/member';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-member-edit',
  templateUrl: './admin-member-edit.component.html',
  styleUrls: ['./admin-member-edit.component.css']
})
export class AdminMemberEditComponent implements OnInit {

  editForm: FormGroup;
  member: Member;

  constructor(private _fb: FormBuilder, private _location: Location, private _admin: AdminService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editForm = this._fb.group({
      _id: '',
      name: '',
      imgUrl: '',
      instagramId: ''
    });

    this.getMemberDetail();
  }

  getMemberDetail() {
    const memberId = this.route.snapshot.paramMap.get('memberId');
    this._admin.getMemberDetailById(memberId)
      .subscribe(data => {
        this.member = data;
        this.editForm.setValue(data);
      },
        error => alert(error.message));
  }

  save() {

  }

  reset() {
    this.editForm.reset(this.member);
  }

  goBack() {
    this._location.back();
  }

}
