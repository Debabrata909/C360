import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServicsService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any>('assets/data.json')
        .toPromise()
        .then(res => <any>res.data)
        .then(data => { return data; });
}
}
