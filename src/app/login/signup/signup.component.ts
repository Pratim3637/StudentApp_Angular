import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
// ngOnInit(): void {
//   throw new Error('Method not implemented.');
// }
//   value: any;

//   constructor() { }

//   ngOnInit(): void {
//   }
//   entername="Good Jobs!";
//   parentData="";
// Transfer() {
//   this.parentData=this.entername;

// }
value="";
sentData(value: string){
this.value=value;
}
}
