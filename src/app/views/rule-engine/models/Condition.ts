import { Device } from './Device';
import { Property } from './Property';

export interface Condition {
  deviceId: number;
  parameterId: number;
  comparisonOperator: string;
  comparisonValue: string;
  device: Device;
  property: Property;
}
