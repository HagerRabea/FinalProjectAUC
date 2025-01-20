import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'category',component:CategoryComponent},
    {path:'products/:category',component:ProductsComponent},
    {path:'singleProduct/:id',component:SingleProductComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent}
];
