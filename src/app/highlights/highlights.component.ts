import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ReturnProductDto } from '../models/product/returnProduct.dto';
import { HttpErrorResponse } from '@angular/common/http';
import { initFlowbite } from 'flowbite';
import { environment } from '../../../envinronment';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {
  apiUrl = environment.apiUrl;

  highlights!: ReturnProductDto[];

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    // initFlowbite();

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
}
