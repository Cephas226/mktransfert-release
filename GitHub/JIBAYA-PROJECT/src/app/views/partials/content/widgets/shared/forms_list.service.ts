import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { formslist } from './forms_list.model';
import { api_services } from './api';
@Injectable({
  providedIn: 'root'
})

export class FormsListRestApiService {
   apiURL = api_services.BASE_API_URL+'/taxreturn/forms/';
  // baseurl1='http://192.168.1.135:8484/accounting/accounting/1/'
  // baseurl3='http://192.168.1.135:8484/accounting/accounting/3/'
  // baseurl4='http://192.168.1.135:8484/accounting/accounting/4/'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }   
  getTablelist_forms(exercice_id): Observable<formslist> {
    return this.http.get<formslist>(this.apiURL+exercice_id+'/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
//   createTableData_forms(formsdata,balance_id): Observable<formsdata> {
//     return this.http.post<formsdata>(this.apiURL+'/'+balance_id+'/',JSON.stringify(formsdata), this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.handleError)
//     )
//   }  
//   updateTableData_forms(formsdata,balance_id): Observable<formsdata> {
//     return this.http.put<formsdata>(this.apiURL +balance_id+'/',  JSON.stringify(formsdata), this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.handleError)
//     )
//   } 
//  deleteTableData_forms(balance_id){
//   return this.http.delete<formsdata>(this.apiURL +balance_id+'/', this.httpOptions)
//   // .pipe(
//   //   retry(1),
//   //   catchError(this.handleError)
//   // )
// }


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