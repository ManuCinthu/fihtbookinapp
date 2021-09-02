import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountsService {

  url = "http://localhost:9090/admin/discounts/";


  constructor(private httpClient: HttpClient) { }
  fetchDiscounts() {
    console.log("fetching all discounts...")
    return this.httpClient.get(this.url);
  }
  fetchDiscountsById(id: number) {
    return this.httpClient.get(this.url + "/" + id);
  }

  createDiscount(todo: any) {
    return this.httpClient.post(this.url, todo);
  }


  updateDiscounts(id: number, todo: any) {
    return this.httpClient.put(this.url + "/" + id, todo);
  }




  removediscounts(id: number) {
    return this.httpClient.delete(this.url + "/" + id);
  }

}
