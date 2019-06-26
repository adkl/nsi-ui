import { Property } from './Property';
import { Action } from './Action';

export interface DeviceType {
  deviceTypeId: number;
  name: string;
  properties: Property[];
  actions: Action[];
}
