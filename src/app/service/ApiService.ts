import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  apiUrl: string = "https://cybersquare.herokuapp.com";

  public userList(){
    return this.http.get<{success: object}>(`${this.apiUrl}/user/`);
  }

  public userCreate(payload: any){
    return this.http.post<{success: object}>(`${this.apiUrl}/user/`, payload);
  }

  public userUpdate(payload: any){
    return this.http.put<{success: object}>(`${this.apiUrl}/user/`, payload);
  }

  public userDelete(userId: any){
    return this.http.delete<{success: object}>(`${this.apiUrl}/user/${userId}`);
  }
}

