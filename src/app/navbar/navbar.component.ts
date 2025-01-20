import { CommonModule } from '@angular/common';
import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
logined:any;
constructor(private _DataService:DataService){
this._DataService.islogined.subscribe((x)=>{
  this.logined=x;
})
}
}
