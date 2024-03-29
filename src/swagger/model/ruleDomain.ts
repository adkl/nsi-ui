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
import { RuleActionDomain } from './ruleActionDomain';
import { RuleConditionDomain } from './ruleConditionDomain';


export interface RuleDomain {
    ruleId?: number;
    name?: string;
    description?: string;
    dateCreated?: Date;
    createdBy?: number;
    dateModified?: Date;
    modifiedBy?: number;
    isActive?: boolean;
    isDeleted?: boolean;
    conditions?: Array<RuleConditionDomain>;
    actions?: Array<RuleActionDomain>;
    id?: number;
    tenantId?: number;
}
