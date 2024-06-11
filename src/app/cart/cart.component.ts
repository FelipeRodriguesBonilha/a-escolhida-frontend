import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { initFlowbite } from 'flowbite';
import { CartService } from '../services/cart/cart.service';
import { ReturnCartDto } from '../models/cart/returnCart.dto';
import { environment } from '../../../envinronment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CurrencyPipe } from '@angular/common';
import { RemoveToCart } from '../models/cart/removeToCart.dto';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!: ReturnCartDto;
  apiUrl = environment.apiUrl;
  cartForm!: FormGroup;

  faPlus = faPlus;
  faMinus = faMinus;
  faTrash = faTrash;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    initFlowbite();

    this.cartForm = this.formBuilder.group({
      products: this.formBuilder.array([])
    })

    this.getCart();
  }

  increment(quantity_product: number, uuid_product: string): void {
    const quantityInt: number = quantity_product + 1;
    this.addProductToCart(quantityInt, uuid_product)
  }

  decrement(quantity_product: number, uuid_product: string): void {
    const quantityInt: number = quantity_product - 1;
    this.removeProductToCart(quantityInt, uuid_product);
  }

  getCart(): void {
    this.cartService.getCart().subscribe({
      next: (response: ReturnCartDto) => {
        this.cart = response;
        // response.cart_products.forEach((cartProduct) => {
        //   (this.cartForm.get('products') as FormArray).push(this.formBuilder.group({
        //     quantity: [cartProduct.quantity_product]
        //   }))
        // })
      },
      error: () => {

      }
    })
  }

  removeProductToCart(quantity_product: number, uuid_product: string): void {
    const removeToCart: RemoveToCart = {
      uuid_product: uuid_product,
      quantity_product: quantity_product
    }

    this.cartService.removeProductToCart(removeToCart).subscribe({

    })
  }

  addProductToCart(quantity_product: number, uuid_product: string): void {
    const removeToCart: RemoveToCart = {
      uuid_product: uuid_product,
      quantity_product: quantity_product
    }

    this.cartService.removeProductToCart(removeToCart).subscribe({

    })
  }
}
