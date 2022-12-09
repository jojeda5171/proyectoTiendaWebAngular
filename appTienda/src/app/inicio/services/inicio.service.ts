import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  url='/api/inicio/';

  constructor(private http:HttpClient) { }

  loadHomes():Observable<any>{
    return this.http.get(this.url);
  }
}
