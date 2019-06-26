import { Paging } from '../../../shared/models/paging';
import { FilterCriteria } from '../../../shared/models/filter-criteria';
import { SortCriteria } from '../../../shared/models/sort-criteria';

export class QueryBuilder {
  static appendPagingSortingFilteringCriteria(requestQuery: string, paging?: Paging, filterCriteria?: FilterCriteria[],
    sortCriteria?: SortCriteria[]): string {
      if (paging) {
        requestQuery += '?paging.page=' + paging.page;
        requestQuery += '&paging.recordsPerPage=' + paging.recordsPerPage;
      }
      let i: number;
      for (i = 0; i < (filterCriteria ? filterCriteria.length : 0); i++) {
        requestQuery += '&filterCriteria[' + i.toString() + '].columnName=' + filterCriteria[i].columnName;
        requestQuery += '&filterCriteria[' + i.toString() + '].filterTerm=' + filterCriteria[i].filterTerm;
        requestQuery += '&filterCriteria[' + i.toString() + '].isExactMatch=' + filterCriteria[i].isExactMatch;
      }
      for (i = 0; i < (sortCriteria ? sortCriteria.length : 0); i++) {
        requestQuery += '&sortCriteria[' + i.toString() + '].columnName=' + sortCriteria[i].columnName;
        requestQuery += '&sortCriteria[' + i.toString() + '].sortOrder=' + sortCriteria[i].sortOrder;
        requestQuery += '&sortCriteria[' + i.toString() + '].priority=' + sortCriteria[i].priority;
      }
      return requestQuery;
  }
}
