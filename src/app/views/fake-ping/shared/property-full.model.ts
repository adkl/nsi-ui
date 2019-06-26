import { Property } from './property.model';

export class PropertyFull {
   constructor(
       public propertyId: number,
       public name: string,
       public isActive: boolean,
       public deviceId: number,
       public dateCreated: string,
       public propertyValue: string
   ) { }
}