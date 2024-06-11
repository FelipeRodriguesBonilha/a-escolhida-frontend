import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { ReturnProductDto } from '../models/product/returnProduct.dto';
import { HttpErrorResponse } from '@angular/common/http';
import { initFlowbite } from 'flowbite';
import { environment } from '../../../envinronment';
import { faPlus, faMinus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddToCart } from '../models/cart/addToCart.dto';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [FontAwesomeModule, NgClass, ReactiveFormsModule],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {
  apiUrl = environment.apiUrl;
  addToCartForm!: FormGroup;

  faPlus = faPlus;
  faMinus = faMinus;
  faHeart = faHeart;

  highlights!: ReturnProductDto[];

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

    this.loadHighlights();
  }

  loadHighlights() {
    this.productService.getHighlights().subscribe({
      next: (response: ReturnProductDto[]) => {
        this.highlights = response;
        console.log(this.highlights)
      },
      error: (error: HttpErrorResponse) => [

      ]
    })
  }

  likeProduct(uuid_product: string){
    this.productService.likeProduct(uuid_product).subscribe({
      next: (response: ReturnProductDto[]) => {
        this.loadHighlights();
      },
      error: (error: HttpErrorResponse) => [

      ]
    })
  }

  addToCart(uuid_product: string): void {
    console.log(uuid_product)
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
