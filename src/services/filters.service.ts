import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private apiProvider: HttpClient) { }
  getFilters(): Observable<any> {
    return this.apiProvider.get(this.baseUrl)
  }
}
