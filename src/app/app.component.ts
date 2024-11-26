import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product List Application';

  products = [
    { id: 1, name: 'Laptop', price: 1000, imageUrl: 'img/laptop.jpg', description: 'High-performance laptop', stock: 10 },
    { id: 2, name: 'Phone', price: 500, imageUrl: 'img/phone.jpg', description: 'Latest smartphone', stock: 25 },
    { id: 3, name: 'Headphones', price: 200, imageUrl: 'img/headphones.jpg', description: 'Noise-cancelling headphones', stock: 15 },
    { id: 4, name: 'Smart Watch', price: 150, imageUrl: 'img/smartwatch.jpg', description: 'Fitness tracking smart watch', stock: 30 },
    { id: 5, name: 'Camera', price: 1200, imageUrl: 'img/camera.jpg', description: 'Digital camera with 4K video', stock: 8 },
    { id: 6, name: 'Keyboard', price: 80, imageUrl: 'img/keyboard.jpg', description: 'Mechanical keyboard with RGB lights', stock: 50 },
    { id: 7, name: 'Mouse', price: 40, imageUrl: 'img/mouse.jpg', description: 'Wireless mouse with ergonomic design', stock: 100 },
    { id: 8, name: 'Bluetooth Speaker', price: 60, imageUrl: 'img/speaker.jpg', description: 'Portable Bluetooth speaker with great sound', stock: 20 },
    { id: 9, name: 'Monitor', price: 300, imageUrl: 'img/monitor.jpg', description: '24-inch Full HD monitor', stock: 12 },
    { id: 10, name: 'Tablet', price: 400, imageUrl: 'img/tablet.jpg', description: '10-inch tablet with fast performance', stock: 18 },
    { id: 11, name: 'Printer', price: 150, imageUrl: 'img/printer.jpg', description: 'Wireless color printer', stock: 14 },
    { id: 12, name: 'Projector', price: 500, imageUrl: 'img/projector.jpg', description: 'Portable HD projector', stock: 7 },
    { id: 13, name: 'Smart TV', price: 800, imageUrl: 'img/smarttv.jpg', description: '55-inch 4K Smart TV', stock: 5 },
    { id: 14, name: 'External Hard Drive', price: 100, imageUrl: 'img/harddrive.jpg', description: '1TB external hard drive', stock: 30 },
    { id: 15, name: 'Smart Thermostat', price: 120, imageUrl: 'img/thermostat.jpg', description: 'WiFi-enabled smart thermostat', stock: 40 },
    { id: 16, name: 'Smart Light Bulb', price: 30, imageUrl: 'img/lightbulb.jpg', description: 'Energy-efficient smart LED bulb', stock: 60 },
    { id: 17, name: 'Drone', price: 350, imageUrl: 'img/drone.jpg', description: 'Quadcopter drone with HD camera', stock: 12 },
    { id: 18, name: 'Game Console', price: 400, imageUrl: 'img/console.jpg', description: 'Next-gen gaming console', stock: 20 }
  ];
  cart: Product[] = [];

  constructor() {
    
    this.loadCartFromStorage();
  }

 
  addToCart(product: Product) {
    
    const productInCart = this.cart.find(item => item.id === product.id);

    if (productInCart) {
      console.log(`${product.name} is already in the cart.`);
    } else {
     
      this.cart.push(product);
      console.log(`${product.name} added to cart.`);
    }

    
    this.saveCartToStorage();
  }


  saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  
  loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

 
  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
    console.log('Cart has been cleared');
  }
}

