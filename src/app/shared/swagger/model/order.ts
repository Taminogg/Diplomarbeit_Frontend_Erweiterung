/**
 * Backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Csinquiry } from './csinquiry';
import { MessageConversation } from './messageConversation';
import { Checklist } from './checklist';
import { Tlinquiry } from './tlinquiry';
import { ProductionPlanning } from './productionPlanning';


export interface Order { 
    id?: number;
    canceled?: boolean;
    successfullyFinished?: boolean;
    status?: string | null;
    customerName?: string | null;
    createdByCS?: string | null;
    createdBySD?: string | null;
    lastUpdatedOn?: string;
    createdOn?: string;
    finishedOn?: string | null;
    checklistId?: number | null;
    csId?: number | null;
    tlId?: number | null;
    ppId?: number | null;
    additionalInformation?: string | null;
    readonly messageConversations?: Array<MessageConversation> | null;
    checklist?: Checklist;
    cs?: Csinquiry;
    tl?: Tlinquiry;
    productionPlanning?: ProductionPlanning;
}
