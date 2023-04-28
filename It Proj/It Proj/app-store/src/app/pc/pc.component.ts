import { Component } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.scss']
})
export class PcComponent {
  constructor(private serve:ServeService){}
  result:any
  ngAfterContentInit(): void {
    this.serve.dataofsell=[]
    this.serve.datafordisplay=[]
    this.serve.category('PC').subscribe(data=>{
      this.result=data.data
     console.log(this.result)
    })

  }
}
