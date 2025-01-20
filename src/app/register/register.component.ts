import { DataService } from './../data.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _DataService:DataService,private _Router:Router){

  }
RegisterForm=new FormGroup({
  fname:new FormControl(null,[Validators.minLength(3),Validators.maxLength(15),Validators.pattern(/^[A-Z]/)]),
  lname:new FormControl(),
  username:new FormControl(),
  email:new FormControl(),
  password:new FormControl(),
})

register(x:any):void{
  console.log(x.value)
//  this._DataService.registerData(x).subscribe((x)=>{
//   console.log(x.value)
//   if(x.msg=="success"){
//    this._Router.navigate(["/login"])
//   }
//  })

this._Router.navigate(['/login'])
}
}
