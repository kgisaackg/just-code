import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "http://localhost:3000/register/register";

  constructor(private http: HttpClient) { }

  addCustomer(customerData: any ){
    return this.http.post(this.url, customerData);
  }

  getCustomer(id: number){
    return {firstname: "Isaac", lastname: "Malebana", emailAddress: "isaac@gmail.com"};
  } 

  updateCustomer(customerData: any){
    const id = this.userId();
    return this.http.put(`${this.url}/${id}`, customerData);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  logIn(customerData: any){
    return {"token": 1342, "customerId": 12};
    //return this.http.post
  }

  userId(){
    return Number(localStorage.getItem('id'));
  }

}
