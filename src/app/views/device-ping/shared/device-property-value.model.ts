export class DevicePropertyValue {
    constructor(
        public id: number,
        public tenantId: number,
        public dateCreated: Date,
        public deviceId: number,
        public propertyId: number,
        public propertyName: string,
        public devicePingId: number,
        public value: string
    ) { }
}
