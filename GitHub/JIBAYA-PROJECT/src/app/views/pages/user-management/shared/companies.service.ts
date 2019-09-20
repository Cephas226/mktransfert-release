import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './companie.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CompaniesRestApiService {
  
  // Define API
  // apiURL = 'http://192.168.1.119:8484/companies/company/';
  apiURL = 'http://localhost:3000'
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
  return this.http.get<Company>(this.apiURL + '/Companies')
  .pipe(
    retry(1),
    catchError(this.handleError)
    
  )
}
display(id) {
  console.log(id)
  return id
} 
updateUser(company: any) {
  return this.http.put(this.apiURL + '/' + company.id, company);
}
// HttpClient API get() method => Fetch Compagnie
getCompanies(id: string): Observable<Company> {
  return this.http.get<Company>(this.apiURL + '/Companies/' + id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  

// HttpClient API post() method => Create Compagnie
createCompagnie(Company): Observable<Company> {
  return this.http.post<Company>(this.apiURL + '/Companies', JSON.stringify(Company), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}   

// HttpClient API put() method => Update Compagnie
updateCompany(id, Company): Observable<Company> {
  return this.http.put<Company>(this.apiURL + '/Companies/' + id,  Company, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// HttpClient API delete() method => Delete Compagnie
deleteCompagnies(id){
  return this.http.delete<Company>(this.apiURL + '/Companies/' + id, this.httpOptions)
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




















  // // HttpClient API get() method => Fetch Compagnies list
  // getCompany(): Observable<Compagnie> {
  //   return this.http.get<Compagnie>(this.apiURL)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
      
  //   )
  // }

  // // HttpClient API get() method => Fetch Compagnie
  // getCompagny(id: string): Observable<Compagnie> {
  //   return this.http.get<Compagnie>(this.apiURL + id+'/')
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }  

  // // HttpClient API post() method => Create Compagnie
  // createCompagnie(Compagnie: { "company_title": string; "short_name": string; "company_activity": string; "company_juridical_form": string; "company_IF": string; "company_ICE": string; "company_TP": string; "company_RC": string; "company_CNSS": string; }): Observable<Compagnie> {
  //   return this.http.post<Compagnie>(this.apiURL , JSON.stringify(Compagnie), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }   

  // // HttpClient API put() method => Update Compagnie
  // updateCompagnie(id: string, Compagnie: any): Observable<Compagnie> {
  //   return this.http.put<Compagnie>(this.apiURL  + id+'/', JSON.stringify(Compagnie), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // // HttpClient API delete() method => Delete Compagnie
  // deleteCompagnie(id: string){
  //   return this.http.delete<Compagnie>(this.apiURL + id+'/', this.httpOptions)
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

}