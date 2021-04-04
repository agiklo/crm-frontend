import { Injectable } from '@angular/core';
import { Products } from './products';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Products[]> {
      return this.http.get<Products[]>(`${this.apiServerUrl}/api/v1/products`)
  }

  public postNewProduct(products : Products): Observable<Products> {
      return this.http.post<Products>(`${this.apiServerUrl}/api/v1/products`, products)
  }

  public deleteProductById(productId : number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/api/v1/products/${productId}`)
  }
}