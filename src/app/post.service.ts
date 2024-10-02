import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/culturas';

  getCulturas(){
    return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    console.log(error);
    return throwError(() => new Error('Something went wrong'));
  }

  getCultura(id: string){
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  getTodasCulturaImagens() {
    return this.http.get<Array<{ cultura_imagem: string }>>(this.apiUrl)  // Presume que a API retorna todas as culturas com o campo `cultura_imagem`
      .pipe(
        catchError(this.handleError)
      );
  }
}
