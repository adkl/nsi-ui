import {Document} from '../document-models/document.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Http } from '@angular/http';
import { DownloadInfo } from '../document-models/downloadInfo.model';
const HttpUploadOptions = {
  headers: new HttpHeaders({ "Accept": "application/json" })
}
@Injectable()
export class DocumentService {
  
  getDocumentUrl = environment.serviceUrl + 'api/Document/Get';
  createDocumentUrl =  environment.serviceUrl + 'api/Document/UploadFile';
  deleteDocumentUrl = environment.serviceUrl + 'api/Document/Delete';
  downloadDocumentUrl =  environment.serviceUrl + 'api/Document/DownloadFile/';

  API: any = environment.serviceUrl;
  private documents: Document[] = [];
  constructor(private http1: Http, private http: HttpClient) {}

  getDocumentFromApi (): Observable<Document[]> { 
    return this.http.get<Document[]>(this.getDocumentUrl);
  }

  deleteDocument(id: number){
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");   
    return this.http.delete(this.deleteDocumentUrl + '/' + id , {headers});
  }
 
  downloadDocument(id: number){
    const httpHeaders = {
      headers: new HttpHeaders({
        'Accept': 'text/plain'
      }),
      'responseType': 'blob' as 'blob'
    };
    return this.http.get( environment.serviceUrl + "api/Document/Download/" + id, 
    httpHeaders);
  }
  addDocument(document: any): Promise<number>{
    return new Promise<number>((resolve, reject) => {
  
      this.http.post(this.createDocumentUrl, document, HttpUploadOptions).subscribe((res: number) =>{
        if(res > -1){
          resolve(res);
        }
        else{
          reject('Could not create document.');
        }
      })
    });
  }
  
  getFileById(id:number){
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");   
    return this.http.get(this.getDocumentUrl + '/'+id, {headers});
  }
}


  

  
