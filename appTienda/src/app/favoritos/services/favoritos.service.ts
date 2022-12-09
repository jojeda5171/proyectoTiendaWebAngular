import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  url='/api/favoritos/';

  constructor(private http:HttpClient) { }

  loadFavorites():Observable<any>{
    return this.http.get(this.url);
  }
}
