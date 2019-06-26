import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export abstract class BaseService {

  private token = sessionStorage.getItem('id_token');
  private options = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  };

  constructor(private http: HttpClient) { }

  get(path: string) {
    return this.http.get(this.fullUrl(path), this.options);
  }

  post(path: string, data: any = null) {
    return this.http.post(this.fullUrl(path), data, this.options);
  }

  put(path: string, data: any = null) {
    return this.http.put(this.fullUrl(path), data, this.options);
  }

  patch(path: string, data: any = null) {
    return this.http.patch(this.fullUrl(path), data, this.options);
  }

  delete(path: string) {
    return this.http.delete(this.fullUrl(path), this.options);
  }

  private fullUrl(path) {
    return `${environment.serviceUrl}api/${path}`;
  }
}
