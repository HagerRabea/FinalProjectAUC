import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  quantity:number=1;
id:any;
singleProduct:any;
    constructor( private _DataService:DataService , private _ActivatedRoute:ActivatedRoute){
      this.id=this._ActivatedRoute.snapshot.params['id'];
      this._DataService.getSingleProduct(this.id).subscribe((x)=>{
        this.singleProduct=x;
      });
      
    }
}
