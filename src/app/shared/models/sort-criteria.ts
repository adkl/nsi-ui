import { SortOrder } from "./sort-order";

export class SortCriteria {
    constructor(
        public columnName: string,
        public sortOrder: SortOrder,
        public priority: number
    ) {}
}