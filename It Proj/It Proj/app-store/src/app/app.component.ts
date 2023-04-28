import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from './serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private serve:ServeService,private router:Router){}


}
