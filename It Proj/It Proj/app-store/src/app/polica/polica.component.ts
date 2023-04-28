import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-polica',
  templateUrl: './polica.component.html',
  styleUrls: ['./polica.component.scss']
})
export class PolicaComponent {
  constructor(private serve:ServeService,private active:ActivatedRoute,private router:Router){}

   date = new Date();

 day = this.date.getDate();
 month = this.date.getMonth() + 1;
 year =this. date.getFullYear();
// console.log(_tafqeet: any( 2234.46 , "EGP") )
// This arrangement can be altered based on how we want the date's format to appear.
 datee = `${this.day}-${this.month}-${this.year}`;
 totalprice:any=0
 client:any
 td:any
 invoice:any
ngAfterViewInit(): void {

  console.log(this.serve.dataofsell)
  this.client=this.active.snapshot.paramMap.get('client')
  this.td=this.active.snapshot.paramMap.get('td')
  this.invoice=this.active.snapshot.paramMap.get('invoice')

  for(let i=0;i<this.serve.dataofsell.length;i++){
    this.serve.dataofsell[i].tax= this.serve.dataofsell[i].noOfPieces*( (this.serve.dataofsell[i].price*14)/100)
    this.totalprice =Math.round(this.totalprice+(this.serve.dataofsell[i].price*this.serve.dataofsell[i].noOfPieces+this.serve.dataofsell[i].tax))
    this.dataforlooping.push( this.serve.dataofsell[i])

  }

  this. sellbtn=document.querySelector('.btnStore')
  this. sellbtn.style.display='none'
  this. sellbtn=document.querySelector('.btnAddTotal')
     this. sellbtn.style.display='none'

}
  dataforlooping:any=[]
  datafordisplay:any=this.serve.datafordisplay
  mybtn:any
  sellbtn:any



  print()
 {

    this. mybtn=document.querySelector('.mybtn')
    this. mybtn.style.display='none'

    this. sellbtn=document.querySelector('.sellbtn')
    this. sellbtn.style.display='none'

    this. sellbtn=document.querySelector('.btnStore')
    this. sellbtn.style.display='flex'
    this. sellbtn=document.querySelector('.btnAddTotal')
       this. sellbtn.style.display='flex'

    window.print()
    setTimeout(() => {
      this. mybtn.style.display='flex'
    }, 1000);

    for(let i=0;i<this.dataforlooping.length;i++) {

      this.dataforlooping[i].count= Number(this.dataforlooping[i].count)-Number(this.dataforlooping[i].noOfPieces)


        if( this.dataforlooping[i].count==0){
          console.log(this.dataforlooping[i])
            this.serve.update(this.dataforlooping[i].id,this.dataforlooping[i]).subscribe(data=>{
           console.log('updatedeleted')
           this.serve.delete(this.dataforlooping[i].id).subscribe(data=>{
            console.log('deleted')

            this.serve.delete(this.dataforlooping[i].id).subscribe(data=>{
              console.log('deleted')

          })

        })
        })


        }
        else {
           this.serve.update(this.dataforlooping[i].id,this.dataforlooping[i]).subscribe(data=>{
           console.log('updated')
        })

      }



      }






  }

  print_second(){
    this. mybtn=document.querySelector('.mybtn')
    this. mybtn.style.display='none'
    window.print()
    setTimeout(() => {
      this. mybtn.style.display='flex'
    }, 1000);
  }

  backToAllPrpduct(){
    for(let i=0;i<this.dataforlooping.length;i++){
      this.dataforlooping[i].client=this.client
      this.dataforlooping[i].td=this.td
      this.dataforlooping[i].invoice=this.invoice
      this.dataforlooping[i].count=this.dataforlooping[i].noOfPieces
      this.dataforlooping[i].price=Number(this.dataforlooping[i].price)*Number(this.dataforlooping[i].noOfPieces)
      this.serve.posttotalsales(this.dataforlooping[i]).subscribe(data=>{
        console.log(data)

      })

    }



    this.router.navigate(['allproduct'])
  }
  restoreData(){

    for(let i=0;i<this.dataforlooping.length;i++){
      console.log(this.dataforlooping[i])
      //this.dataforlooping[i].count= Number(this.dataforlooping[i].count)+Number(this.dataforlooping[i].noOfPieces)
       console.log(this.dataforlooping[i].count)
      console.log(this.dataforlooping[i].noOfPieces)
      this.dataforlooping[i].count=Number(this.datafordisplay[i].count)+Number (this.dataforlooping[i].noOfPieces)
      this.serve.update(this.dataforlooping[i].id,this.dataforlooping[i]).subscribe((result:any)=>{
        console.log(result)
      })
 }
 this. sellbtn=document.querySelector('.btnStore')
 this. sellbtn.style.display='none'
 this. sellbtn=document.querySelector('.btnAddTotal')
    this. sellbtn.style.display='none'

 this. sellbtn=document.querySelector('.sellbtn')
    this. sellbtn.style.display='flex'



}
}

