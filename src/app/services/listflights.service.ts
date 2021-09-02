import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listflights } from '../models/listflights';

@Injectable({
  providedIn: 'root'
})
export class ListflightsService {
//   url = "http://localhost:9090/flightlist";
//   url = "http://localhost:3000/flightlist";
url="http://localhost:9090/user/produces/flightlist";
// url="http://ec2-3-83-107-109.compute-1.amazonaws.com/user/produces/flightlist"


  constructor(private httpClient:HttpClient) { }
  fetchFlights(){
    console.log("fetching all fights...")
    return this.httpClient.get(this.url);
}
fetchFlightsById(id:number){
    return this.httpClient.get(this.url+"/"+id);
}

createFlight(todo:any){
    return this.httpClient.post(this.url, todo);
}


updateFlight(id:number, todo:any){
    return this.httpClient.put(this.url+"/"+id, todo);
}

getAirlinesbyDate(givendate : any, departfrom : any, gotolocation : any):Observable<Array<Listflights>>{
    let params = new HttpParams()
    .set('returndate', givendate)
    .set('departfrom', departfrom)
    .set('gotolocation', gotolocation);
    return this.httpClient.get<Array<Listflights>>(this.url, {params});
  }


removeFlight(id:number){
    return this.httpClient.delete(this.url+"/"+id);
}





}
