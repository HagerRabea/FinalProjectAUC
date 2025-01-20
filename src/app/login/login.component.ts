import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor(private _DataService:DataService,private _Router:Router){

  }
LoginForm=new FormGroup({
  username:new FormControl(),
  password:new FormControl(),
})
login(data:any):void{
  console.log(data)
  this._DataService.loginData(data.value).subscribe((x)=>{
    console.log(x)
    if(x.error==undefined){
      this._DataService.islogined.next(true);
      this._Router.navigate(['/category'])
    }
  })
}
}
