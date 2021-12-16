import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/ApiService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  userLists: any = [];

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.loadUserList();
  }

  loadUserList() {
    this._apiService
      .userList()
      .subscribe((response: any) => {
        this.userLists = response;
    });
  }

  updateUser(userId: any) {
    this._router.navigate([`/user-update/${userId}`]);
  }

  deleteUser(userId: any) {
    this._apiService
      .userDelete(userId)
      .subscribe((response: any) => {
        if (response === 'Data deleted Successfully..!') {
          this.loadUserList();
        }
    });
  }

  onAdd() {
    this._router.navigate(['/user-registration']);
  }
}
