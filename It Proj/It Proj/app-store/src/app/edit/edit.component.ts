import { Component } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { ServeService } from '../serve.service';
import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  constructor(private serve:ServeService,private router:Router,private activated:ActivatedRoute){}
  myid:any
  data:any

  myform=new FormGroup({
    name:new FormControl(),
    model:new FormControl(),
    serial_no:new FormControl(),
    count:new FormControl(),
    price:new FormControl(),
    info:new FormControl(),
    category:new FormControl(),

  })

  ngAfterViewInit(): void {

    this.activated.paramMap.subscribe((params:ParamMap)=>{
      this.myid=params.get('id')
      console.log(this.myid)
   })
  // console.log(myid)
  this.serve.getelement(this.myid).subscribe(result=>{
    this.data=result.data[0]

     console.log(result)
   })

}
updatedata(data2:any){
  console.log(this.myid)
  console.log(data2.value)
  if(data2.value.name==null){
    data2.value.name=this.data.name
  }
  if(data2.value.model==null){
    data2.value.model=this.data.model
  }
  if(data2.value.serial_no==null){
    data2.value.serial_no=this.data.serial_no
  }
  if(data2.value.price==null){
    data2.value.price=this.data.price
  }
  if(data2.value.count==null){
    data2.value.count=this.data.count
  }
  if(data2.value.info==null){
    data2.value.info=this.data.info
  }
  if(data2.value.category==null){
    data2.value.category=this.data.category
  }
this.serve.update(this.myid,data2.value).subscribe(result=>{
console.log(result)

  this.router.navigate(['allproduct'])
localStorage.clear()
})
}
}
