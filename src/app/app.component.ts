import { Component,OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private service:ServiceService){}
 dataList:any;
 rawJsonData=[];
 ngOnInit(){
   this.getDetails();
   setInterval(()=> this.getDetails(),10000)
 }
 getDetails(){
   return this.service.details().subscribe(res=>{console.log(res)
  this.dataList=res['hits']})
 }
 popup(x){
this.rawJsonData=x
 }
}
