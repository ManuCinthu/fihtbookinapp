import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manageschedule } from '../models/manageschedule';

@Injectable({
  providedIn: 'root'
})
export class ManagescheduleService {
  // url = "http://localhost:3000/manageschedule";

  // url = "http://localhost:8989/schedules/";

 url="http://localhost:9090/admin/schedules/"; 
// url="http://ec2-3-83-107-109.compute-1.amazonaws.com/admin/schedules/"

  constructor(private httpClient:HttpClient) { }
  fetchSchedules(){
    console.log("fetching all schedules...")
    return this.httpClient.get(this.url);
}

fetchscheduleById(id:number){
    return this.httpClient.get(this.url+"/"+id);
}

createschedule(schedules:any){
    return this.httpClient.post(this.url, schedules);
}



updateschedulebyId(data:any,id:number){
  return this.httpClient.put(this.url+data.id,data);
}


deletescheduleById(id:number){
  return this.httpClient.delete(this.url+"/"+id);
}

  

}
