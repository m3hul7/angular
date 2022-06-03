import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Chart } from '../google-chart/charts.model';

@Injectable({
  providedIn: 'root'
})
export class ChartColumnService {

  constructor(private http: HttpClient) { }
  getColumn(): Observable<Chart[]>{
    return this.http.get<Chart[]>(`http://localhost:3000/chart`);
  }
}
