import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  //intgerpolation..
  public title:string="For Using Binding";
  public topic :string ="For Dsiplay..";
  public empname=['Vishal','Shailesh','Saurabh','Nitya','Vishnu','Anurag','Mayank']
  public uname:string|undefined;
  @ViewChild('myInputText')
  inputText!: { nativeElement: any; };
  
  constructor(){
    setInterval(() => {this.send2Server();},2000);
  }
  send2Server(){
    let Data=this.inputText.nativeElement;
    console.log(Data.value);
  }
  
  ngOnInit(): void {
  }
  OnClick(){
    alert("Welcome to Student Registration Form.."+this.uname)
  }
}