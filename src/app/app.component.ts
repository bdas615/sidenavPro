import { Component } from '@angular/core';
import { OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class  AppComponent implements OnInit{
  title = 'Welcome to Angular';
  

  showFiller=false;

  constructor() {}

  ngOnInit():void { 
;
    let x:string='a';
   }
   
}
