import { CommonModule } from '@angular/common';
import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories:string[]=[];
  constructor(private _DataService:DataService){
    this._DataService.getCategory().subscribe((x)=>{
      this.categories=x;
      // console.log(x)
    })
  }

  
}
