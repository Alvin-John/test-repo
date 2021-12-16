import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/ApiService';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _router: Router
  ) { 
    this.userForm = this._formBuilder.group({
      f_name: ['', Validators.required],
      l_name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  submit() {
    this._apiService
      .userCreate(this.userForm.value)
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