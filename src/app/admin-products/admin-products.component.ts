import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { ReturnProductDto } from '../models/product/returnProduct.dto';
import { environment } from '../../../envinronment';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {
  products!: ReturnProductDto[];
  apiUrl = environment.apiUrl;
  faPlus = faPlus;
  faMinus = faMinus;
  faTrash = faTrash;
  
  constructor(
    private productService: ProductService,
  ){}
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response: ReturnProductDto[]) => {
        this.products = response;
      },
      error: (err) => [

      ]
    })
  }
}
