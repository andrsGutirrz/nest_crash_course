import { Injectable } from "@nestjs/common";

import { Product } from "./../entities/product.entity";

@Injectable()
export class ProductsService {
  private counterId: number = 1;
  private products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      description: "Product 1",
      price: 122,
      image: "",
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    return newProduct;
  }

  update(id: number, payload: any) {
    const indexToUpdate = this.indexOfItem(id);
    this.products[indexToUpdate] = { ...payload };
  }

  delete(id: number) {
    const indexToRemove = this.products.findIndex((item) => item.id === id);
    this.products.splice(indexToRemove, 1);
  }

  indexOfItem(id: number) {
    return this.products.findIndex((item) => item.id === id);
  }
}
