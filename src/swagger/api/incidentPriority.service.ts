/**
 * NSI.Api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { IncidentPriorityDomain } from '../model/incidentPriorityDomain';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class IncidentPriorityService {

    protected basePath = 'https://localhost:44349';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add new Priority
     * 
     * @param priority 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public incidentPriorityAddIncidentPriority(priority: IncidentPriorityDomain, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public incidentPriorityAddIncidentPriority(priority: IncidentPriorityDomain, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public incidentPriorityAddIncidentPriority(priority: IncidentPriorityDomain, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public incidentPriorityAddIncidentPriority(priority: IncidentPriorityDomain, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (priority === null || priority === undefined) {
            throw new Error('Required parameter priority was null or undefined when calling incidentPriorityAddIncidentPriority.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<number>(`${this.basePath}/api/IncidentPriority/AddIncidentPriority`,
            priority,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete Priority
     * 
     * @param incidentPriorityId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public incidentPriorityDeleteIncidentPriority(incidentPriorityId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public incidentPriorityDeleteIncidentPriority(incidentPriorityId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public incidentPriorityDeleteIncidentPriority(incidentPriorityId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public incidentPriorityDeleteIncidentPriority(incidentPriorityId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (incidentPriorityId === null || incidentPriorityId === undefined) {
            throw new Error('Required parameter incidentPriorityId was null or undefined when calling incidentPriorityDeleteIncidentPriority.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (incidentPriorityId !== undefined) {
            queryParameters = queryParameters.set('incidentPriorityId', <any>incidentPriorityId);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/IncidentPriority/DeleteIncidentPriority`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Edit Priority
     * 
     * @param priority 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public incidentPriorityEditIncidentPriority(priority: IncidentPriorityDomain, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public incidentPriorityEditIncidentPriority(priority: IncidentPriorityDomain, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public incidentPriorityEditIncidentPriority(priority: IncidentPriorityDomain, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public incidentPriorityEditIncidentPriority(priority: IncidentPriorityDomain, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (priority === null || priority === undefined) {
            throw new Error('Required parameter priority was null or undefined when calling incidentPriorityEditIncidentPriority.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/api/IncidentPriority/EditIncidentPriority`,
            priority,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves all incidents priorities from system
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public incidentPriorityGet(observe?: 'body', reportProgress?: boolean): Observable<Array<IncidentPriorityDomain>>;
    public incidentPriorityGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<IncidentPriorityDomain>>>;
    public incidentPriorityGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<IncidentPriorityDomain>>>;
    public incidentPriorityGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<IncidentPriorityDomain>>(`${this.basePath}/api/IncidentPriority/Get`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves incident priority by provided id
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public incidentPriorityGet_1(id: number, observe?: 'body', reportProgress?: boolean): Observable<IncidentPriorityDomain>;
    public incidentPriorityGet_1(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IncidentPriorityDomain>>;
    public incidentPriorityGet_1(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IncidentPriorityDomain>>;
    public incidentPriorityGet_1(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling incidentPriorityGet_1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<IncidentPriorityDomain>(`${this.basePath}/api/IncidentPriority/Get/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
