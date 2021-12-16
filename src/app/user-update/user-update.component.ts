import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/ApiService';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userForm: FormGroup;
  userId: any;
  selectedUser: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _router: Router,
    private _actRouter: ActivatedRoute,
  ) { 
    this.userId = this._actRouter.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      f_name: ['', Validators.required],
      l_name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      id: ['']
    });
    if(this.userId) {
      this._apiService
        .userList()
        .subscribe((response: any) => {
          if(response) {
            for (let index = 0; index < response.length; index++) {
              const element = response[index];
              if (element.id == this.userId) {
                this.userForm.patchValue({
                  f_name: element.f_name,
                  l_name: element.l_name,
                  dob: element.dob,
                  gender: element.gender,
                  email: element.email,
                  id: element.id
                });
                this.selectedUser = element;
              }
            }
          }
        });
    }
  }
  submit() {
    this._apiService
      .userUpdate(this.userForm.value)
      .subscribe((response: any) => {
        if (response) {
          this._router.navigate(['/user-list']);
        }
    });
  }
  onCancel() {
    this._router.navigate(['/user-list']);
  }
}
