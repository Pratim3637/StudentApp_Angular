import { Component, OnInit } from '@angular/core';
export interface person{
  name:string;
  place:string;
}

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  username:string="Angular";
  number1:number=34.567;
  public date=new Date();
  public empname="Testtemp";

  p1:person[]=[];
  searchItem:string |undefined;
  name=['Haersh','arjun','tehndu'];

  constructor() { 
    this.name.forEach((e,i)=>this.p1.push({
      name:e,
      place:'Bangalore'
    }));
  }

  ngOnInit(): void {
  }

}
