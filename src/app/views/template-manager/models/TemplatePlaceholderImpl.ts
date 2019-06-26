import { TemplatePlaceholder } from './interfaces/TemplatePlaceholder';

export class TemplatePlaceholderImpl implements TemplatePlaceholder {

  id: number;
  description: string;
  type: string;
  length: number;

  constructor() {
    this.description = '';
    this.type = 'unknown';
  }

}
