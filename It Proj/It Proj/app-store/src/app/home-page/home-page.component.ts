import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['Welcome ,','In smile compushop','welcome ,'],
      typeSpeed: 110
    };

    var typed = new Typed ('.element', options);
  }

}
