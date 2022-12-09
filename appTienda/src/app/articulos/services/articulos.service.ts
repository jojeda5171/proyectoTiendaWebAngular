import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url='/api/articulos/';

  constructor(private http:HttpClient) { }

  loadArticles():Observable<any>{
    return this.http.get(this.url);
  }
}
