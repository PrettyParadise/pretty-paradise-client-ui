import {Component, OnInit} from '@angular/core';
import {BackendCallService} from "../core/services/backend-call.service";
import {ProductModel} from "../core/models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = null;
  productImages: string[] = [];

  constructor(private backendCallService: BackendCallService) {
  }

  ngOnInit(): void {
    this.backendCallService.getAllProducts().subscribe(
      (products) => {
        this.products = products;
        this.productImages = [];
        for (let product of this.products) {
          this.productImages.push(`data:image/png;base64,${product.encodedImage || ''}`);
        }
      }
    );
  }

}
