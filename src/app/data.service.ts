import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }

  //API >>
  /*
HttpClient Module
httpclient >>>
>>methods

  get 
  post
  put
  patch
  delete
  */

  islogined= new BehaviorSubject(false);
 getCategory():Observable<any>{
  let response=this._HttpClient.get('https://dummyjson.com/products/category-list');
  return response;
 }
 getAllProducts(Klma:any):Observable<any>{
let response=this._HttpClient.get(`https://dummyjson.com/products/category/${Klma}`);
return response;
}


getSingleProduct(id:number):Observable<any>{

  let res=this._HttpClient.get(`https://dummyjson.com/products/${id}`);
  return res
}

registerData(data:any):Observable<any>{
let res=this._HttpClient.post('https://dummyjson.com/user/login',data);
return res;
}
loginData(data:any):Observable<any>{
let res=this._HttpClient.post('https://dummyjson.com/user/login',data);
return res;
}

}

