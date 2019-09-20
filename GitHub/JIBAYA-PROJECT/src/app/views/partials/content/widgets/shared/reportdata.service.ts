import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { formslist } from './forms_list.model';
import { api_services } from './api';
@Injectable({
  providedIn: 'root'
})

export class ReportService {
   apiURL = api_services.BASE_API_URL+'/taxreturn/pdf/';
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
  createTableReport(companyid,exerciceid,table_id): Observable<any> {
    return this.http.post<any>(this.apiURL+companyid+'/'+exerciceid+'/',table_id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  // createTableReport(companyid,exerciceid,report_data): Observable<any> {
  //   return this.http.post<any>(this.apiURL+companyid+'/',exerciceid,+'/'+JSON.stringify(report_data), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }  
 
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