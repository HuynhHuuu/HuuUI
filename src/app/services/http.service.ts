import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { 
  }
  public async getHelloWorld(apiPath: String): Promise<Observable<any>>{
    let result =  this.http.get(environment.enpoint+apiPath)
    return  result;
  }
  public async postData(name:String, price:String, quantity:number, photourl:String, collectName:String){
    let result = await this.http.post(environment.enpoint+'api', {
      data: {name:name,price:price,quantity:quantity,photourl:photourl},
      collectionName:collectName
    });
    return result;
  }
}

