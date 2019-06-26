import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class RuleService extends BaseService {
  private perPage = 3;

  constructor(http: HttpClient) { super(http); }

  all(page: number = 1, deviceId: number = null) {
    return this.get(this.resolveUrl(page, deviceId));
  }

  deleteById(id: number) {
    return this.delete(`Rule/DeleteRule?ruleId=${id}`);
  }

  store(payload: any) {
    return this.post('Rule/AddRule', payload);
  }

  getPerPage() {
    return this.perPage;
  }

  private resolveUrl(page: number, deviceId: number = null) {
    let url = `Rule/Get?request.paging.page=${page}&request.paging.recordsPerPage=${this.perPage}`;

    if (deviceId !== null) {
      url += `&request.filterCriteria[0][columnName]=deviceId&request.filterCriteria[0][filterTerm]=${deviceId}`;
    }

    return url;
  }
}
