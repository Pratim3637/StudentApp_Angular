import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  template: ` <input type="text" [(ngModel)]="username"/>{{username}}
  <button type="submit" (click)="clear()">Submit</button>
  <input type="checkbox" [(ngModel)]="value" #checkbox>FindSubject
  <div *ngIf="checkbox.checked" >
    <p *ngFor ="let cname of coursename">{{cname}}
   </p>
</div>
  `,
  styles: [
  ]
})
export class NewCompComponent implements OnInit {
  value:string|undefined;
  coursename :string[]=['Java','Python','JavaScript','Mysql','DataStructure'];
  public username:string|undefined;

  constructor() { }

  ngOnInit(): void {
  }
  clear(){
alert("This is your name "+this.username);
this.username="";
  }

}
