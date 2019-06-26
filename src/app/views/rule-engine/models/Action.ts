import { Property } from './Property';
import { Device } from './Device';

export interface Action {
  actionId: number;
  name: string;
  properties: Property[];
  device: Device;
}
