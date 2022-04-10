import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IFindProduct } from '../interfaces/sales-response';

@Injectable({ providedIn: 'root' })
export class SalesViewService {
  public baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.url}`;
  }

  /**
   * get all products
   */
  public addProducts(findProduct: IFindProduct) {
    return this.httpClient.post(
      this.baseUrl + '/Products/AddProducts',
      findProduct
    );
    // const url = `${this.baseUrl}/products/AddProducts`;
    // return this.httpClient.post(url);
  }

  public getAllProducts(): Observable<any> {
    return this.httpClient.get(this.baseUrl+'/Products/GetAllProducts')
    // const url = `${this.baseUrl}/products/getAllProducts`;
    // return this.httpClient.get(url, {headers});
  }
}
