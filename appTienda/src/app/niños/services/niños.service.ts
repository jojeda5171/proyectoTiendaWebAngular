import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiñosService {
  url='/api/ninos/';

  constructor(private http:HttpClient) { }

  loadNinos():Observable<any>{
    return this.http.get(this.url);
  }
}
