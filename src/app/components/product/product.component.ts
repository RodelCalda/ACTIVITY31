import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'; 
import { ProductService } from '../../services/product.service';


@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
