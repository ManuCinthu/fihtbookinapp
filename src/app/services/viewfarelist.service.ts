import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewfarelistService {

  url = "http://localhost:3000/viewfarelist";

  constructor(private httpClient: HttpClient) { }

  fetchfares() {
    console.log("fetching all fights...")
    return this.httpClient.get(this.url);
  }
  fetchfaresbyId(id: number) {
    return this.httpClient.get(this.url + "/" + id);
  }
}
