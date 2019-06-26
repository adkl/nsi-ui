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
import { ActionDomain } from './actionDomain';
import { AuditTrailDomain } from './auditTrailDomain';
import { DeviceDomain } from './deviceDomain';
import { DevicePropertyValue } from './devicePropertyValue';


export interface DevicePingDomain {
    dateCreated?: Date;
    ruleId?: number;
    actionId?: number;
    action?: ActionDomain;
    deviceId?: number;
    device?: DeviceDomain;
    devicePropertyValues?: Array<DevicePropertyValue>;
    auditTrail?: AuditTrailDomain;
    id?: number;
    tenantId?: number;
}