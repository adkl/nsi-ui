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


export interface POSTIncidentDomain {
    incidentId?: number;
    dateCreated?: Date;
    createdBy?: number;
    modifiedBy?: number;
    dateModified?: Date;
    incidentStatus?: number;
    deviceId?: number;
    priority?: number;
    incidentType?: number;
    reporterId?: number;
    assigneeId?: number;
    id?: number;
    tenantId?: number;
}