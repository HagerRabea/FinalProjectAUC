import { CommonModule } from '@angular/common';
import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  klma:any;
  products:any[]=[];
constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute){
 this.klma=this._ActivatedRoute.snapshot.params['category'] 
 console.log(this.klma)
this._DataService.getAllProducts(this.klma).subscribe((x)=>{
  console.log(x)
  this.products=x.products;
})
console.log("ay haga")
}
}
