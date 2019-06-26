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
import { UserDomain } from './userDomain';


export interface SearchUserResponse {
    data?: Array<UserDomain>;
    message?: string;
    success?: SearchUserResponse.SuccessEnum;
}
export namespace SearchUserResponse {
    export type SuccessEnum = 0 | 1;
    export const SuccessEnum = {
        NUMBER_0: 0 as SuccessEnum,
        NUMBER_1: 1 as SuccessEnum
    }
}
