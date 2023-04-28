import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ServeService } from '../serve.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})

export class SellComponent {
  constructor(private _serve:ServeService,private router :Router){}

  myform=new FormGroup({
    serial:new FormControl(''),
    num:new FormControl(1),
    client:new FormControl('',[Validators.required]),
    td:new FormControl('',[Validators.required]),
    invoice:new FormControl('',[Validators.required])

   })
   data:any=[]
   x:any=[]
   count:any=1
   dataofsells:any
   appearx:any=null
   msgOfChooseBefore:any=null
   msgOfCount:any

   ngAfterViewInit(): void {
    this._serve.dataofsell=[]
    this._serve.datafordisplay=[]
    this.serial=document.querySelector('#myserial')
   this.serial.focus()
    console.log(this._serve.dataofsell)
   }
serial:any
  dataenter(dataa:any){
    this._serve.getserial(dataa.value.serial).subscribe((result)=>{
      console.log(result.data[0])
      if(result.data[0]){
        this.msgOfChooseBefore=null
        this.msgOfCount=null
        for(let i=0;i<this.data.length;i++) {
        if(this.data[i].id==result.data[0].id) {
          this.msgOfChooseBefore="You Already Choose before"
          this.msgOfCount=null
        }

        }
   if(this.msgOfChooseBefore==null) {

        if(result.data[0].count<dataa.value.num) {
          this.msgOfChooseBefore=null
          this.msgOfCount='There Is much than you have'
        }

         else if(result.data[0].count>=dataa.value.num&&dataa.value.num>0){

            this.msgOfChooseBefore=null
            this.msgOfCount=null
            result.data[0].noOfPieces=dataa.value.num
           // result.data[0].originalcount=result.data[0].count
            //result.data[0].count=dataa.value.num
            this.data.push(result.data[0])
            this._serve.dataofsell.push(result.data[0])
            this._serve.datafordisplay.push(result.data[0])
        }

    }

 }
    else{
      this.appearx=true

      this.x.push(dataa.value.serial)
    }


    })
  }
  sell(data:any)
  {

    if(this._serve.dataofsell.length>0) {
      this.router.navigate(['polica',data.value.client,data.value.td,data.value.invoice])
    }

  }



  removeele(num:any){
this.data.splice(num.innerHTML-1,1)
  }
}
