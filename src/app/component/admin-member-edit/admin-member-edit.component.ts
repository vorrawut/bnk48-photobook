// Angular
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AdminService } from '../../services/admin.service';

// Models
import { Member } from '../../models/member';
import { ActivatedRoute } from '@angular/router';

// Validators
import { UrlValidator } from '../../validators/url.validator';

@Component({
  selector: 'app-admin-member-edit',
  templateUrl: './admin-member-edit.component.html',
  styleUrls: ['./admin-member-edit.component.css']
})
export class AdminMemberEditComponent implements OnInit {

  editForm: FormGroup;
  member: Member;

  constructor(private _fb: FormBuilder,
    private _location: Location,
    private _admin: AdminService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const memberId = this.route.snapshot.paramMap.get('memberId');
    this._admin.getMemberDetailById(memberId)
      .subscribe(data => {
        this.member = data;
        this.editForm = this._fb.group({
          _id: [data._id, Validators.required],
          name: [data.name, Validators.required],
          imgUrl: [data.imgUrl, [Validators.required, UrlValidator.validate]],
          instagramId: [data.instagramId, Validators.required]
        });
      },
        error => alert(error.message));
  }

  save() {
    if (this.editForm.valid) {
      this._admin.updateMemberDetailById(this.editForm.value).subscribe(data => {
        this._location.back();
      }, error => alert(error.message));
    } else {
      console.log(this.editForm.get('imgUrl').getError('url'));
    }
  }

  reset() {
    this.editForm.reset(this.member);
  }

  goBack() {
    this._location.back();
  }

}
