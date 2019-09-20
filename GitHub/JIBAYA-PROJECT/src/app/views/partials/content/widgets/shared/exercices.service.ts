import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { api_services } from './api';
@Injectable()
export class ExercicesService {

//   apiURL = 'http://localhost:3100';
//    httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json'
//     })
// };
//   constructor(
//     private http: HttpClient
//   ) {
    
//   }
// private extractData(res: Response) {
//   let body = res;
//   return body || { };
// }
// getexercices(id): Observable<any> {
//   return this.http.get(this.apiURL+ '/exercices/'+id+'/').pipe(
//     map(this.extractData));
// }
// createExercices(exercice,id): Observable<any> {
//   return this.http.post<any>(this.apiURL + '/exercices/'+id+'/', JSON.stringify(exercice), this.httpOptions)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// }

// deleteExercices(idCompany,idExercice){
//   return this.http.delete<any>(this.apiURL + '/exercices/'  + idCompany+'/'+idExercice+'/', this.httpOptions)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// } 
// updateExercice(Exercice,idCompany,idExercice): Observable<any> {
//   return this.http.put<any>(this.apiURL + '/exercices/' + idCompany+'/'+idExercice+'/',  Exercice, this.httpOptions)
//   .pipe(
//     retry(1),
//     catchError(this.handleError)
//   )
// } 
// handleError(error) {
//   let errorMessage = '';
//   if(error.error instanceof ErrorEvent) {
//     // Get client-side error
//     errorMessage = error.error.message;
//   } else {
//     // Get server-side error
//     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//   }
//   window.alert(errorMessage);
//   return throwError(errorMessage);
// }
apiURL = api_services.BASE_API_URL+'/exercises/exercise/';
httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })
};
constructor(
 private http: HttpClient
) {
 
}
private extractData(res: Response) {
let body = res;
return body || { };
}
getexercices(id): Observable<any> {
return this.http.get(this.apiURL+id+'/').pipe(
 map(this.extractData));
}
createExercices(exercice,id): Observable<any> {
return this.http.post<any>(this.apiURL+id+'/', JSON.stringify(exercice), this.httpOptions)
.pipe(
 retry(1),
 catchError(this.handleError)
)
}

deleteExercices(idCompany,idExercice){
return this.http.delete<any>(this.apiURL  + idCompany+'/'+idExercice+'/', this.httpOptions)
.pipe(
 retry(1),
 catchError(this.handleError)
)
} 
updateExercice(idCompany,idExercice,exercice,): Observable<any> {
return this.http.put<any>(this.apiURL  + idCompany+'/'+idExercice+'/',  JSON.stringify(exercice), this.httpOptions)
.pipe(
 retry(1),
 catchError(this.handleError)
)
} 
handleError(error) {
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
