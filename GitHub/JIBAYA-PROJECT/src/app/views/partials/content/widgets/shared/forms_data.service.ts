import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { formsdata } from './forms_data.model';
import { api_services } from './api';
@Injectable({
  providedIn: 'root'
})

export class FormsDataRestApiService {
 
 apiURL = api_services.BASE_API_URL+'/taxreturn/data/';
  // baseurl1='http://192.168.1.135:8484/accounting/accounting/1/'
  // baseurl3='http://192.168.1.135:8484/accounting/accounting/3/'
  // baseurl4='http://192.168.1.135:8484/accounting/accounting/4/'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }   
  getTableData_forms(exercice_id,id_balance,id_form): Observable<formsdata> {
    return this.http.get<formsdata>(this.apiURL+exercice_id+'/'+id_balance+'/'+id_form+'/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
createTableData_forms(exercice_id,id_balance,id_form,formsdata): Observable<formsdata> {
  return this.http.post<formsdata>(this.apiURL+exercice_id+'/'+id_balance+'/'+id_form+'/',JSON.stringify(formsdata), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  

createTableData_forms_no_balance(exercice_id,id_form,formsdata): Observable<formsdata> {
  return this.http.post<formsdata>(this.apiURL+exercice_id+'/'+id_form+'/',JSON.stringify(formsdata), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}         


  updateTableData_forms(id,formsdata): Observable<formsdata> {
    return this.http.put<formsdata>(this.apiURL+'update_delete/'+id+'/',JSON.stringify(formsdata), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  deleteTableData_forms(id){
    return this.http.delete<formsdata>(this.apiURL+'update_delete/'+ id+'/', this.httpOptions)
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  } 

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