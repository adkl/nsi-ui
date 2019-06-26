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

import { AddTenantRequest } from '../model/addTenantRequest';
import { AddTenantResponse } from '../model/addTenantResponse';
import { GetTenantByIdentifierResponse } from '../model/getTenantByIdentifierResponse';
import { GetTenantResponse } from '../model/getTenantResponse';
import { SearchTenantRequest } from '../model/searchTenantRequest';
import { SearchTenantResponse } from '../model/searchTenantResponse';
import { UpdateTenantRequest } from '../model/updateTenantRequest';
import { UpdateTenantResponse } from '../model/updateTenantResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TenantService {

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
     * Adds new tenant
     * 
     * @param request {NSI.DataContracts.Membership.Tenant.AddTenantRequest}
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tenantAddTenant(request: AddTenantRequest, observe?: 'body', reportProgress?: boolean): Observable<AddTenantResponse>;
    public tenantAddTenant(request: AddTenantRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AddTenantResponse>>;
    public tenantAddTenant(request: AddTenantRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AddTenantResponse>>;
    public tenantAddTenant(request: AddTenantRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling tenantAddTenant.');
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

        return this.httpClient.post<AddTenantResponse>(`${this.basePath}/api/Tenant/AddTenant`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a single tenant by provided Identifier in request
     * 
     * @param guid {System.Guid}
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tenantGetByIdentifier(guid: string, observe?: 'body', reportProgress?: boolean): Observable<GetTenantByIdentifierResponse>;
    public tenantGetByIdentifier(guid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetTenantByIdentifierResponse>>;
    public tenantGetByIdentifier(guid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetTenantByIdentifierResponse>>;
    public tenantGetByIdentifier(guid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (guid === null || guid === undefined) {
            throw new Error('Required parameter guid was null or undefined when calling tenantGetByIdentifier.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (guid !== undefined) {
            queryParameters = queryParameters.set('guid', <any>guid);
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

        return this.httpClient.get<GetTenantByIdentifierResponse>(`${this.basePath}/api/Tenant/GetByIdentifier`,
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
     * Retrieves single tenant by provided ID in request
     * 
     * @param id {NSI.DataContracts.Membership.Tenant.GetTenantRequest}
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tenantGetTenant(id: number, observe?: 'body', reportProgress?: boolean): Observable<GetTenantResponse>;
    public tenantGetTenant(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetTenantResponse>>;
    public tenantGetTenant(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetTenantResponse>>;
    public tenantGetTenant(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling tenantGetTenant.');
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

        return this.httpClient.get<GetTenantResponse>(`${this.basePath}/api/Tenant/GetTenant/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Searches tenants. If no parameters have been provided in request, return all tenants.
     * 
     * @param request {NSI.DataContracts.Membership.Tenant.SearchTenantRequest}
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tenantSearchTenants(request: SearchTenantRequest, observe?: 'body', reportProgress?: boolean): Observable<SearchTenantResponse>;
    public tenantSearchTenants(request: SearchTenantRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchTenantResponse>>;
    public tenantSearchTenants(request: SearchTenantRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchTenantResponse>>;
    public tenantSearchTenants(request: SearchTenantRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling tenantSearchTenants.');
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

        return this.httpClient.post<SearchTenantResponse>(`${this.basePath}/api/Tenant/SearchTenants`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates tenant
     * 
     * @param request {NSI.DataContracts.Membership.Tenant.UpdateTenantRequest}
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tenantUpdateTenant(request: UpdateTenantRequest, observe?: 'body', reportProgress?: boolean): Observable<UpdateTenantResponse>;
    public tenantUpdateTenant(request: UpdateTenantRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UpdateTenantResponse>>;
    public tenantUpdateTenant(request: UpdateTenantRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UpdateTenantResponse>>;
    public tenantUpdateTenant(request: UpdateTenantRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling tenantUpdateTenant.');
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

        return this.httpClient.post<UpdateTenantResponse>(`${this.basePath}/api/Tenant/UpdateTenant`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}