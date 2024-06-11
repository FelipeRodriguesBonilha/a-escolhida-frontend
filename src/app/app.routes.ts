import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminSuppliersComponent } from './admin-suppliers/admin-suppliers.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: AuthComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cart', component: CartComponent },
    { path: 'products', component: ProductsComponent },
    {
        path: 'admin-home',
        component: AdminHomeComponent,
        children: [
            { path: 'categories-adm', component: AdminCategoriesComponent },
            { path: 'suppliers-adm', component: AdminSuppliersComponent },
            { path: 'products-adm', component: AdminProductsComponent },
            { path: '', redirectTo: 'products-adm', pathMatch: 'full' },
        ]
    },
];

