import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }
  public canActivate(router:ActivatedRouteSnapshot){
    return true;
  }
}
