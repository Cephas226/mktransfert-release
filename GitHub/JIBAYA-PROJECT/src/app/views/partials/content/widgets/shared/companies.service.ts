import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './companie.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { api_services } from './api';
@Injectable({
  providedIn: 'root'
})

export class CompaniesRestApiService {
  
  // Define API
  // apiURL = 'http://192.168.1.119:8484/companies/company/';
//   apiURL = 'http://localhost:3000'
//   constructor(private http: HttpClient) { }

//   /*========================================
//     CRUD Methods for consuming RESTful API
//   =========================================*/

//   // Http Options
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   }  




//  // HttpClient API get() method => Fetch Compagnies list
//  getCompany(): Observable<Company> {
//   return this.http.get<Company>(this.apiURL + '/Companies')
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
    
//   )
// }
// display(id) {
//   console.log(id)
//   return id
// } 

// // HttpClient API get() method => Fetch Compagnie
// getCompanies(id: string): Observable<Company> {
//   return this.http.get<Company>(this.apiURL + '/Companies/' + id)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// }  

// // HttpClient API post() method => Create Compagnie
// createCompagnie(Company): Observable<Company> {
//   return this.http.post<Company>(this.apiURL + '/Companies', JSON.stringify(Company), this.httpOptions)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// }   

// // HttpClient API put() method => Update Compagnie
// updateCompany(id, Company): Observable<Company> {
//   return this.http.put<Company>(this.apiURL + '/Companies/' + id,  Company, this.httpOptions)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// }

// // HttpClient API delete() method => Delete Compagnie
// deleteCompagnies(id){
//   return this.http.delete<Company>(this.apiURL + '/Companies/' + id, this.httpOptions)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// }

// // Error handling 
// handleError(error: { error: { message: string; }; status: any; message: any; }) {
//    let errorMessage = '';
//    if(error.error instanceof ErrorEvent) {
//      // Get client-side error
//      errorMessage = error.error.message;
//    } else {
//      // Get server-side error
//      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//    }
//    window.alert(errorMessage);
//    return throwError(errorMessage);
// }
  
  // Define API
  apiURL = api_services.BASE_API_URL+'/companies/company/';
  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  




 // HttpClient API get() method => Fetch Compagnies list
 getCompany(): Observable<Company> {
  return this.http.get<Company>(this.apiURL)
  .pipe(
    retry(1),
    catchError(this.handleError)
    
  )
}
display(id) {
  console.log(id)
  return id
} 

// HttpClient API get() method => Fetch Compagnie
getCompanies(id: string): Observable<Company> {
  return this.http.get<Company>(this.apiURL  + id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  

// HttpClient API post() method => Create Compagnie
createCompagnie(Company): Observable<Company> {
  return this.http.post<Company>(this.apiURL, JSON.stringify(Company), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
  
}   

// HttpClient API put() method => Update Compagnie
updateCompany(id, Company): Observable<Company> {
  return this.http.put<Company>(this.apiURL +id+'/',  Company, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// HttpClient API delete() method => Delete Compagnie
deleteCompagnies(id){
  return this.http.delete<Company>(this.apiURL + id+'/', this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

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