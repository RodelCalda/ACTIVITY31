export class Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  stock: number; // New property for stock

  constructor(id: number, name: string, price: number, imageUrl: string, description: string, stock: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
      this.description = description;
      this.stock = stock; // Initialize stock
  }
}
