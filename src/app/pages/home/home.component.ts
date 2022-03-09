import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpService) {
    this.get('api/item')
   }

  ngOnInit(): void {
  }
  public async get(apiPath: String){ 
    let result;
    await (await this.http.getHelloWorld(apiPath)).subscribe(value=>console.log(value))
    while(result==undefined){
      return result
    }
    return;
  }
  // public name = '';
  // public collectionitem = '';
  // public async addData(){
  //   await (await this.http.postData(this.name,this.collectionitem)).subscribe((value:any)=>{
  //     alert(value['message']);
  //   });
  // }
}
