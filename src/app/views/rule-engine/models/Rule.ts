import { Action } from './Action';
import { Condition } from './Condition';

export interface Rule {
  ruleId: number;
  name: string;
  description: string;
  conditions: Condition[];
  actions: Action[];
}
