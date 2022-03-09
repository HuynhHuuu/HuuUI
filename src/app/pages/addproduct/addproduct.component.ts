import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor(public http:HttpService) { }

  ngOnInit(): void {
  }
  public name = '';
  public price='';
  public quantity = 0;
  public photourl='';
  public collectionitem = '';
  public async addData(){
    await (await this.http.postData(this.name,this.price,this.quantity,this.photourl,this.collectionitem)).subscribe((value:any)=>{
      alert(value['message']);
    });
  }
}
