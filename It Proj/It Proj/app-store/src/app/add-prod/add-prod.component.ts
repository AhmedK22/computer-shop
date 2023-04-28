import { Component } from '@angular/core';
import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';



@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.scss']
})
export class AddProdComponent {
constructor(private serve:ServeService,private router:Router){}
myform=new FormGroup({
  name:new FormControl('',[Validators.required]),
  price:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
  info:new FormControl(''),
  model:new FormControl('',[Validators.required]),
  category:new FormControl('',[Validators.required]),
  serial_no:new FormControl('',[Validators.required]),

})
ngOnInit(): void {

}
serial:any
ngAfterViewInit(): void {
  this.serve.dataofsell=[]
    this.serve.datafordisplay=[]
 this. serial=document.querySelector('#myserial')
 this.serial.focus()

}
display:any
get seriall(){
  return this.myform.get('serial')
}
get name(){
  return this.myform.get('name')
}
get model(){
  return this.myform.get('model')
}
get price(){
  return this.myform.get('price')
}
get category(){
  return this.myform.get('category')
}
ability:any=true
ability2:any=false
changevalue(data:any){
  console.log(data.value.serial_no)
this.serve.getserial(data.value.serial_no).subscribe(data=>{
  console.log(data)
 if(data.data.length>0){

  this.ability=false
  this.ability2=true
  this.display=data.data[0]
  console.log(this.display)
  }
})
}
enterdata(data:any){


    this.serve.addprod(data.value).subscribe(result=>{
      if(result.message=="product added"){
        this.router.navigate(['/allproduct'])

      }
    // console.log(result)
     })


}
enterdata2(){
  console.log(this.display)
  if(this.display!=null){
    this.display.serial=this.display.serial_no
    this.serve.addprod(this.display).subscribe(result=>{
      if(result.message=="product added"){
        this.router.navigate(['/allproduct'])

      }
     // console.log(result)
     })
  }
}
}
