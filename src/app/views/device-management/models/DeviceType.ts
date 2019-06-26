export class DeviceType {
    constructor(
        public deviceTypeId: number,
        public name: string,
        public code: string,
        public actions: any,
        public properties: any,
        public isActive: boolean,
    ) {};
}