import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProductsService } from './products.service';
import { Products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Products[];

  constructor(private productsService: ProductsService) { }

  public getAllProducts(): void {
      this.productsService.getAllProducts().subscribe(
        (response: Products[]) => {
          this.products = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

}
