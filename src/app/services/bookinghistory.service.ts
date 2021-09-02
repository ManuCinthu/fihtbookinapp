import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookinghistoryService {

  // url = "http://localhost:3000/bookinghistory";
  // url = "http://localhost:9090/bookinghistory";
  url="http://localhost:9090/user/bookinghistory"
  // url="http://ec2-3-83-107-109.compute-1.amazonaws.com/user/bookinghistory"
  
  constructor(private httpClient:HttpClient) { }


  fetchBookingHistory(){
    console.log("fetching all bookings...")
    return this.httpClient.get(this.url);
}
fetchBookingHistoryById(id:number){
    return this.httpClient.get(this.url+"/"+id);
}

createBookinghistory(todo:any){
  return this.httpClient.post(this.url, todo);
}


updateBookinghistory(id:number, todo:any){
  return this.httpClient.put(this.url+"/"+id, todo);
}


removeBookingHistory(id:number){
  return this.httpClient.delete(this.url+"/"+id);
}

}
