import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterCriteria } from '../../shared/models/filter-criteria';
import { SortCriteria } from '../../shared/models/sort-criteria';
import { Paging } from '../../shared/models/paging';
import { SearchDevicePingRequest } from './shared/requests/search-device-ping-request';
import { BaseService } from './base.service';

@Injectable()
export class DevicePingService extends BaseService {

    constructor(private httpClient: HttpClient) {
        super(httpClient);
    }

    public search(filterCriteria: FilterCriteria[], sortCriteria: SortCriteria[], paging: Paging): Observable<any> {
        const request = new SearchDevicePingRequest(filterCriteria, sortCriteria, paging);
        return this.post('/devicePing/search', request);
    }
}
