import { Component } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-hdd',
  templateUrl: './hdd.component.html',
  styleUrls: ['./hdd.component.scss']
})
export class HddComponent {
  constructor(private serve:ServeService){}
  result:any
  ngAfterContentInit(): void {
    this.serve.dataofsell=[]
    this.serve.datafordisplay=[]
    this.serve.category('HDD').subscribe(data=>{
      this.result=data.data
     console.log(this.result)
    })

  }
}
