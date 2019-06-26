import { Property } from './property.model';

export class DeviceProperty {
   constructor(
       public name: string,
       public isActive: boolean,
       public deviceId: number,
       public dateCreated: string,
       public deviceProperties: Property[]
   ) { }
}