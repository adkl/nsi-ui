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


export interface SendEmailRequest {
    toEmails?: Array<string>;
    subject?: string;
    body?: string;
    ccEmails?: Array<string>;
    bccEmails?: Array<string>;
    attachments?: Array<string>;
}