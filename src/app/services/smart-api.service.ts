import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { smartInterface } from '../models/smart-interface';

@Injectable({
  providedIn: 'root'
})
export class SmartApiService {
  private url = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';
  private http = inject(HttpClient);

  getSmartFitLocations(): Observable<smartInterface> {
    return this.http.get<smartInterface>(this.url);
  }
}
