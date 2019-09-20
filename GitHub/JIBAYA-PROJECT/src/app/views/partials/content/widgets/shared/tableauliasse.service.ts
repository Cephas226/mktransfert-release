import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TableauData } from './tableauliasse.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { api_services } from './api';
@Injectable({
  providedIn: 'root'
})

export class TableauliasseRestApiService {
  apiURL = api_services.BASE_API_URL+'/accounting/accounting/';
  // baseurl1='http://192.168.1.135:8484/accounting/accounting/1/'
  // baseurl3='http://192.168.1.135:8484/accounting/accounting/3/'
  // baseurl4='http://192.168.1.135:8484/accounting/accounting/4/'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }   
  getTableData(country_id): Observable<TableauData> {
    return this.http.get<TableauData>(this.apiURL+country_id+'/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  createTableData(TableauData,country_id): Observable<TableauData> {
    return this.http.post<TableauData>(this.apiURL+country_id+'/',JSON.stringify(TableauData), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  updateTableData(country_id,id, TableauData): Observable<TableauData> {
    return this.http.put<TableauData>(this.apiURL +country_id+'/'+id+'/',  JSON.stringify(TableauData), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
 deleteTableData(country_id,id){
  return this.http.delete<TableauData>(this.apiURL +country_id+'/'+id+'/', this.httpOptions)
  // .pipe(
  //   retry(1),
  //   catchError(this.handleError)
  // )
}


// display(id) {
//   console.log(id)
//   return id
// } 

// // HttpClient API get() method => Fetch Compagnie
// getCompanies(id: string): Observable<Company> {
//   return this.http.get<Company>(this.apiURL  + id)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// }  

// // HttpClient API post() method => Create Compagnie
// createCompagnie(Company): Observable<Company> {
//   return this.http.post<Company>(this.apiURL, JSON.stringify(Company), this.httpOptions)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
  
// }   

// // HttpClient API put() method => Update Compagnie
// updateCompany(id, Company): Observable<Company> {
//   return this.http.put<Company>(this.apiURL +id+'/',  Company, this.httpOptions)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// }

// // HttpClient API delete() method => Delete Compagnie
// deleteCompagnies(id){
//   return this.http.delete<Company>(this.apiURL + id+'/', this.httpOptions)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// }

// Error handling 
handleError(error: { error: { message: string; }; status: any; message: any; }) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     // Get client-side error
     errorMessage = error.error.message;
   } else {
     // Get server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   window.alert(errorMessage);
   return throwError(errorMessage);
}
}