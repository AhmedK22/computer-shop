import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { ServeService } from './serve.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  title = 'app-store';
  constructor(private router:Router){}
 result:any
 sell()
 {
  this.router.navigate(['sell'])
 }
 addprod()
 {
  this.router.navigate(['addprod'])
 }
 allprod()
 {
  this.router.navigate(['allproduct'])
 }
  getlab(){


this.router.navigate(['lab'])
  }
  getpc(){


    this.router.navigate(['pc'])


  }
  gethdd(){

    this.router.navigate(['hdd'])
  }
  getssd(){

    this.router.navigate(['ssd'])
  }
  totalsales(){
    this.router.navigate(['prevsales'])
  }
  deletedItems(){
    this.router.navigate(['deletedItem'])
  }

}
