import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class BackendCallService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(){
    return this.httpClient.get<ProductModel[]>('/products');
  }
}
