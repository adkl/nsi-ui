import { FilterCriteria } from "../../../../shared/models/filter-criteria";
import { SortCriteria } from "../../../../shared/models/sort-criteria";
import { Paging } from "../../../../shared/models/paging";

export class SearchDevicePingRequest {

    constructor(
        public filterCriteria: FilterCriteria[],
        public sortCriteria: SortCriteria[],
        public paging: Paging
    ) { }
}