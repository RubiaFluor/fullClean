import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponseError } from '../interfaces/sales-response';

@Injectable({providedIn: 'root'})
export class UserService {
    public baseUrl: string;

    constructor(private httpClient: HttpClient) { 
        this.baseUrl = `${environment.url}`
    }


    public createUser(params: any): Promise<any>{
        const url = `${this.baseUrl}/User/createUser`;
        return this.httpClient.post(url, params).toPromise();
    }
    
}