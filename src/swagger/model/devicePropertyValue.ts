/**
 * NSI.Api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AuditTrailDomain } from './auditTrailDomain';
import { DeviceDomain } from './deviceDomain';
import { PropertyDomain } from './propertyDomain';


export interface DevicePropertyValue {
    dateCreated?: Date;
    deviceId?: number;
    device?: DeviceDomain;
    propertyId?: number;
    property?: PropertyDomain;
    devicePingId?: number;
    value?: string;
    auditTrail?: AuditTrailDomain;
    id?: number;
    tenantId?: number;
}
