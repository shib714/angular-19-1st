import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { IDesignation, IRole } from '../model/interface/role';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  designationUrl: string = environment.BASE_URL + Constant.API_METHOD.GET_DESIGNATIONS;
  roleUrl: string = environment.BASE_URL + Constant.API_METHOD.GET_ROLES;


  //use of HttpClient is deprecated in 18
  constructor(private http: HttpClient) {
    //this.designations = this.getDesignations();
    //this.roles = this.getRoles();
  }
  //using rxResource in angular 19
  // getDesignations() {
  //   this.designations = rxResource( {
  //     loader: () => {
  //       return this.http.get(this.url1); //just return observer, no need to subscribe
  //     }
  //   });
  // }

  //using normal
  fetchDesignations() {
    return this.http.get<IDesignation[]>(this.designationUrl);
  }

  //using normal
  fetchRoles() {
    return this.http.get<IRole[]>(this.roleUrl);
  }
  // getRoles() {
  //   this.roles = rxResource( {
  //     loader: () => {
  //       return this.http.get(this.roleUrl); //just return observer, no need to subscribe
  //     }
  //   });
  // }
}
