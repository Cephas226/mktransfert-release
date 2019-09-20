import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';
import { api_services } from './api';
@Injectable({ providedIn: 'root' })
export class FileService {
    apiURL = api_services.BASE_API_URL+'/taxreturn/pdf/';
  constructor(private http: Http) {}

  downloadFile(): Observable<any>{		
		return this.http.get(this.apiURL, { responseType: ResponseContentType.Blob });
   }
   
}