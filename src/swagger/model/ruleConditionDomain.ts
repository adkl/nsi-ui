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
import { DeviceDomain } from './deviceDomain';
import { PropertyDomain } from './propertyDomain';


export interface RuleConditionDomain {
    ruleConditionId?: number;
    comparisonOperator?: string;
    comparisonValue?: string;
    dateCreated?: Date;
    createdBy?: number;
    dateModified?: Date;
    modifiedBy?: number;
    isActive?: boolean;
    device?: DeviceDomain;
    property?: PropertyDomain;
    id?: number;
    tenantId?: number;
}
