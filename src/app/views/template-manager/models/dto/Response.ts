import { Paging } from '../../../../shared/models/paging';

interface Response {
  message: string;
  success: boolean;
}

export interface ArrayResponse<T> extends Response {
  data: T[];
  paging: Paging;
}

export interface ObjectResponse<T> extends Response {
  data: T;
}
