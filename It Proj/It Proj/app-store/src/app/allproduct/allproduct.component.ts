import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.scss']
})
export class AllproductComponent {
constructor(private serve:ServeService,private router:Router){}
data:any
arrOfSells:any=[]
ngAfterViewInit(){
  this.serve.dataofsell=[]
    this.serve.datafordisplay=[]
  localStorage.clear()
  this.serve.getallprod().subscribe(result=>{
   this.data=result.data
    console.log(result)
  })

  //localStorage.clear()
}
myid:any
dataele:any
updatee(id:any){


  this.myid=id.innerHTML
  this.serve.getelement(this.myid).subscribe(result=>{
    this.dataele=result.data[0]
  localStorage.setItem('name',this.dataele.name)
  localStorage.setItem('serial',this.dataele.serial_no)
  localStorage.setItem('model',this.dataele.model)
  localStorage.setItem('count',this.dataele.count)
  localStorage.setItem('price',this.dataele.price)
  localStorage.setItem('info',this.dataele.info)
  localStorage.setItem('category',this.dataele.category)
     console.log(result)
   })

 this.router.navigate(['edit',this.myid])
}
deletee(id:any){
  let text='do you sure want to delete this product'
  if(confirm(text)==true){
    let myid=id.innerHTML
    console.log(myid)
    this.serve.delete(myid).subscribe(result=>{
      this.serve.getallprod().subscribe(result=>{
        this.data=result.data
         console.log(result)
       })
    })
    for(let i=0;i< this.data.length;i++) {
      if( this.data[i].id==id.innerHTML){
        this.serve.adddeleteditem(this.data[i]).subscribe(data=>{
          console.log(myid)

      })
    }


  }
}


}
sell(id:any){
 /* console.log(this.data)
  for(let i=0;i<this.data.length;i++){

  if(this.data[i].id==id.innerHTML&&this.data[i].count!=0){
  this.data[i].count=this.data[i].count-1
  this.serve.getelement(id.innerHTML).subscribe(result=>{
    if(result){
    this.arrOfSells.push(result.data)
    console.log(this.arrOfSells)

    }
  })
}
  }
  localStorage.setItem('sell', this.arrOfSells)*/


}
}
