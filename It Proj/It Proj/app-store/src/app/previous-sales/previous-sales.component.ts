import { Component } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-previous-sales',
  templateUrl: './previous-sales.component.html',
  styleUrls: ['./previous-sales.component.scss']
})

export class PreviousSalesComponent {
  result:any=[]
  money:any=0
  moneyappear:any=false
new: any;
  constructor(private serve:ServeService){}
ngAfterContentInit(): void {
  this.serve.dataofsell=[]
    this.serve.datafordisplay=[]
this.serve.totalsales().subscribe(data=>{

  this.result=data.data
  for(let i=0;i<this.result.length;i++){
    this.date=new Date(this.result[i].dateOfSales)
    this.result[i].dateOfSales=this.date.toLocaleDateString("en-US")
  }
  console.log(data)
})
}
mybtn:any
date:any
view:any
totalmoney(){
  this.moneyappear=true
  for (let i = 0; i < this.result.length; i++) {
this.money +=this.result[i].price
  }
 this.mybtn=document.querySelector('.MYBTN')
 this.mybtn.style.display='none'
}
deleteall(){
  this.serve.deletetotalsales().subscribe(data=>{
    console.log(data)
    this.result=[]
  })
}
}
