import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat.model';

const baseUrl = 'http://localhost:3000/cats';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cat[]> {
    return this.http.get<Cat[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${baseUrl}?name=${name}`);
  }

  likeCounter(cat: Cat): any {
    cat.likes++;
  }

  dislikeCounter(cat: Cat): any {
    cat.dislike++;
  }

}
