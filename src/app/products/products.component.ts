import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReturnProductDto } from '../models/product/returnProduct.dto';
import { faMinus, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../envinronment';
import { initFlowbite } from 'flowbite';
import { HttpErrorResponse } from '@angular/common/http';
import { AddToCart } from '../models/cart/addToCart.dto';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FontAwesomeModule, NgClass, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  apiUrl = environment.apiUrl;
  addToCartForm!: FormGroup;

  faPlus = faPlus;
  faMinus = faMinus;
  faHeart = faHeart;

  products!: ReturnProductDto[];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    initFlowbite();

    this.addToCartForm = this.formBuilder.group({
      quantity_product: ['', Validators.required]
    })

    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (response: ReturnProductDto[]) => {
        this.products = response;
      },
      error: (error: HttpErrorResponse) => [

      ]
    })
  }

  likeProduct(uuid_product: string){
    this.productService.likeProduct(uuid_product).subscribe({
      next: (response: ReturnProductDto[]) => {
        this.loadProducts();
      },
      error: (error: HttpErrorResponse) => [

      ]
    })
  }

  addToCart(uuid_product: string): void {
    const addToCart: AddToCart = {
      uuid_product: uuid_product,
      quantity_product: parseInt(this.addToCartForm.value.quantity_product),
    }
    
    this.cartService.addProductToCart(addToCart).subscribe({
      next: () => {
        this.router.navigate(['/cart']);
      }
    })
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
