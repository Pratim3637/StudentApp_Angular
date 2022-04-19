import { Component, EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // @Input() parentData:string | undefined;
  @Output() public sentData=new EventEmitter<string>();

  constructor() { }

  ngOnInit(){
    this.sentData.emit("Hy Guys!");
  }

}
