import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanzamientosService {
  url='/api/lanzamientos/';

  constructor(private http:HttpClient) { }

  loadlaunches():Observable<any>{
    return this.http.get(this.url);
  }
}
