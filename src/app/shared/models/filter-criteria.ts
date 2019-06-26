export class FilterCriteria {
    constructor(
        public columnName: string,
        public filterTerm: string,
        public isExactMatch: boolean
    ) {}
}