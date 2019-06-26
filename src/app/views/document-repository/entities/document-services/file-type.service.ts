import {HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { FileTypeModel } from '../document-models/fileType.model';

@Injectable()
export class FileTypeService {
  
    getExtensionUrl = environment.serviceUrl + 'api/FileType/GetFileExtensionById/';
    getFileTypes = environment.serviceUrl + 'api/FileType/Get';
    getFileIdByExtension = environment.serviceUrl + 'api/FileType/GetFileIdByExtension'

    constructor(private http: HttpClient) {}

    getFileExtensionById (fileTypeId: number): any {
        const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");   
        return this.http.get(this.getExtensionUrl + '/' + fileTypeId,{headers});
    }

    getExtensions() : Promise<string[]>{
        return new Promise<string[]>((resolve, reject) => this.http.get(this.getFileTypes).subscribe((res: FileTypeModel[]) => {
            var extensions: string[] = [];
            res.forEach((element: FileTypeModel) => {
                extensions.push(element.extension);
            });
            resolve(extensions);
        }));
    }

    getFileTypeIdThroughExtension(extension: string): Promise<number>{
        return new Promise<number>((resolve, reject) => {
            this.http.get(this.getFileIdByExtension + '/' + extension).subscribe((res: number) =>{
                if(res > -1) {
                    resolve(res);
                }
                else{
                    reject('Could not retrieve FileTypeId.');
                }
            });
        });   
    }
}

