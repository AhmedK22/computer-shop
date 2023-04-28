import { Component } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent {
constructor(private serve:ServeService){}
result:any
ngAfterContentInit(): void {
  this.serve.category('LABTOP').subscribe(data=>{
    this.result=data.data
   console.log(this.result)
  })

}
}
