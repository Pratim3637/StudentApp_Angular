import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title="Color Chnaging in My html Registration page...";
  getData(val:string){
    console.warn(val);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
