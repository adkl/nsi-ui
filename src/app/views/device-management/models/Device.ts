export class Device {
  public numberOfIncidents: number
  constructor( 
    public deviceId: number, 
    public name: string,
    public description: string,
    public deviceTypeId: number,
    public isActive: boolean,
    public deviceImage: string  
  ) {};
}