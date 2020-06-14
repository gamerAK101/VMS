import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { table } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class serve{
   private readonly URL:string="http://localhost:3000/infos";
  constructor(private http:HttpClient) { }

  Create(data:table):Observable<table>
  {
    return this.http.post<table>(this.URL,data);
  }
  Getall():Observable<table[]>
  {
    return this.http.get<table[]>(this.URL);
  }
}
