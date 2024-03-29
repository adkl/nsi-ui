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
import { AddRuleActionDomain } from './addRuleActionDomain';
import { AddRuleConditionDomain } from './addRuleConditionDomain';


export interface AddRuleDomain {
    name: string;
    description: string;
    conditions: Array<AddRuleConditionDomain>;
    actions: Array<AddRuleActionDomain>;
    id?: number;
    tenantId?: number;
}
