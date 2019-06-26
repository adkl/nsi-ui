import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { get } from 'lodash';

@Pipe({
  name: 'grdFilter'
})
export class GrdFilterPipe implements PipeTransform {
  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter) {
      return items;
    }

    if (!Array.isArray(items)) {
      return items;
    }

    if (filter && Array.isArray(items)) {
      const filterKeys = Object.keys(filter);
      if (defaultFilter) {
        return items.filter(item =>
            filterKeys.reduce((x, keyName) =>
                (x && new RegExp(get(filter, keyName), 'gi').test(get(item, keyName))) || get(item, keyName) === '', true));
      } else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(get(filter, keyName), 'gi').test(get(item, keyName) || get(filter, keyName) === '');
          });
        });
      }
    }
  }
}
