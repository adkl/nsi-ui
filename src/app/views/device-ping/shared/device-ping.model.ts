import { DevicePropertyValue } from './device-property-value.model';

export class DevicePingModel {
    constructor (
        public id: number,
        public tenantId: number,
        public dateCreated: Date,
        public ruleId: number,
        public actionId: number,
        public action: any,
        public deviceId: number,
        public device: any,
        public devicePropertyValues: any[]
    ) { }
}
