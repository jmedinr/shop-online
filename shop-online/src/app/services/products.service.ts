import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private REST_API_SERVER = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
