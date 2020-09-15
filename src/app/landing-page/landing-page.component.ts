import {Component, OnInit} from '@angular/core';
import {BackendCallService} from "../core/services/backend-call.service";
import {ProductModel} from "../core/models/product.model";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  latestAddedProducts: ProductModel[] = [];
  latestAddedProductImages: string[] = [];

  constructor(private backendCallService: BackendCallService) {
  }

  ngOnInit(): void {
    this.backendCallService.getAllProducts().subscribe(
      (products) => {
        for (let i = products.length - 1; i > products.length - 4; i--){
          this.latestAddedProducts.push(products[i]);
          this.latestAddedProductImages.push(`data:image/png;base64,${products[i].encodedImage || ''}`);
        }
      }
    );
  }

}
