import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'my_Application';
  author = 'Wilson Espinosa';
  count = 0;
  imgSource = './assets/images/pic_angular.jpg';
  enabled = false;
  isEnabled(){
     this.enabled= !this.enabled;
  }
}