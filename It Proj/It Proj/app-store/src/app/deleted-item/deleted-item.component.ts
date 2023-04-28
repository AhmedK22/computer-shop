import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-deleted-item',
  templateUrl: './deleted-item.component.html',
  styleUrls: ['./deleted-item.component.scss']
})
export class DeletedItemComponent {
 data:any=[]
 constructor(private serve:ServeService,private router:Router){}

 ngAfterViewInit(): void {
  this.serve.dataofsell=[]
    this.serve.datafordisplay=[]
  this.serve.getdeleteditem().subscribe(result=>{
   this.data=result.data
    console.log(result)
  })


 }


 restore(id:any){
  let text='do you sure want to restore this data'
  if(confirm(text)==true) {
    for(let i=0;i< this.data.length;i++) {
      if( this.data[i].id==id.innerHTML){
        this.serve.addprod(this.data[i]).subscribe(data=>{
          console.log(data);
         this.router.navigate(['allproduct'])
        })
        this.data[i].count=this.data[i].count-1
        if(this.data[i].count==0){
          this.serve.deletedDataOne(id.innerHTML).subscribe(result=>{})
          
        }
        else{

          this.serve.updateDeletedItem(id.innerHTML,this.data[i]).subscribe(data=>{
            console.log(data)
         //   this.router.navigate(['allproduct'])
          })

        }
      }
    }
  }

 }
 deletee(){
  let text='do you sure want to delete this data'
  if(confirm(text)==true) {
    this.serve.deletedDataAll().subscribe(result=>{
      console.log('deleted');
      this.serve.getdeleteditem().subscribe(result=>{
        this.data=result.data
         console.log(result)
       })
    })
  }

 }

 deleteone(id:any,textt:any='delete'){
  let text=`do you sure want to ${textt} this data`
  if(confirm(text)==true) {
    this.serve.deletedDataOne(id.innerHTML).subscribe(result=>{
      console.log('deleted');
      this.serve.getdeleteditem().subscribe(result=>{
        this.data=result.data
         console.log(result)
       })
    })

  }

 }

}
