export class Paging {
    constructor(
        public page: number,
        public totalRecords: number,
        public recordsPerPage: number,
        public pages: number
    ) {}
}
