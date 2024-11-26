import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; 

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
        new Product(1, 'Laptop', 1000, 'assets/images/laptop.jpg', 'High-performance laptop', 10),
        new Product(2, 'Phone', 500, 'assets/images/phone.jpg', 'Latest smartphone', 25),
        new Product(3, 'Headphones', 200, 'assets/images/headphones.jpg', 'Noise-cancelling headphones', 15),
    ];

    getProducts(): Product[] {
        return this.products;
    }
}
