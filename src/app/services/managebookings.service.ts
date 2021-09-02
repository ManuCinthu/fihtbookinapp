import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Managebooking } from '../models/managebooking';

@Injectable({
  providedIn: 'root'
})
export class ManagebookingsService {
  //  url = "http://localhost:9090/managebooking";
  // url = "http://localhost:3000/managebooking";
   url="http://localhost:9090/user/managebooking";

  // url="http://ec2-3-83-107-109.compute-1.amazonaws.com/user/managebooking"

  constructor(private httpClient: HttpClient) { }


  fetchmanagebookings():Observable<Managebooking> {
    console.log("fetching all fights...")
    return this.httpClient.get<Managebooking>(this.url);
  }
  fetchbookingsbyId(id: number):Observable<Managebooking> {
    return this.httpClient.get<Managebooking>(this.url + "/" + id);
  }

  createbookings(booking: any) {
    return this.httpClient.post(this.url, booking);
  }

  updatebookingbyId(data:any,id:number){
    return this.httpClient.put(this.url+"/"+data.id,data);
}


createBookings(data:any){
  return this.httpClient.post(this.url, data);
}


  deletebookings(id: number) {
    return this.httpClient.delete(this.url + "/" + id);
  }


}
