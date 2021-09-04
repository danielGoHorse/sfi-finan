import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class SimulacaoService {
    apiUrl: string;
    itemSelected: any;
    orderSelected: any;
    plataformaToEdit: any;
    planoToEdit: any;
    formUser: any;


    constructor(private http: HttpClient) {
        this.apiUrl = `https://api.bradesco.com`;
    }

    get(): Observable<any> {
        return this.http.get(`${this.apiUrl}/bradesco_financiamentos/open-banking/products-services/v1/personal-financings`);
    }



}