import { Component } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-ssd',
  templateUrl: './ssd.component.html',
  styleUrls: ['./ssd.component.scss']
})
export class SsdComponent {
  constructor(private serve:ServeService){}
  result:any
  ngAfterContentInit(): void {
    this.serve.dataofsell=[]
    this.serve.datafordisplay=[]
    this.serve.category('SSD').subscribe(data=>{
      this.result=data.data
     console.log(this.result)
    })

  }
}
