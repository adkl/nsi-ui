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
import { RoleMemberDomain } from './roleMemberDomain';


export interface UserDomain {
    firstName?: string;
    lastName?: string;
    middleName?: string;
    timeZoneId?: string;
    email?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    languageId?: number;
    identifier?: string;
    roleMember?: Array<RoleMemberDomain>;
    fullName?: string;
    id?: number;
    tenantId?: number;
}
