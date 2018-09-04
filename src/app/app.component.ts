import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  username = 'mac';
  isEnabledAddUser = false;
  isEnabledInputName = false;

  ngOnInit(): void {
    setTimeout(() => {this.isEnabledAddUser=true;}, 2000);
  }

  enableInputName(){
    this.isEnabledInputName = !this.isEnabledInputName;
  }

}
