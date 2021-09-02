import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manageairlines } from '../models/manageairlines';

@Injectable({
  providedIn: 'root'
})
export class ManageairlinesService {
//   url = "http://localhost:9090/airlines/";
//   url="http://localhost:8989/airlines/";

  url="http://localhost:9090/admin/airlines/"

//   url="http://ec2-3-83-107-109.compute-1.amazonaws.com/admin/airlines/"


  constructor(private httpClient:HttpClient) { }
  fetchAirlines(){
    console.log("fetching all airlines...")
    return this.httpClient.get(this.url);
}
fetchAirlineById(id:number){
    return this.httpClient.get(this.url+"/"+id);
}

createAirline(airlines:any){
    return this.httpClient.post(this.url, airlines);
}




updateairelinebyId(data:any,id:number){
    return this.httpClient.put(this.url+data.id,data);
}




deleteairlinesbyId(id:number){
    return this.httpClient.delete(this.url+"/"+id);
}

}
