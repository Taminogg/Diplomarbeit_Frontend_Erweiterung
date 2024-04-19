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
import { Order } from './order';


export interface Tlinquiry { 
    id?: number;
    sped?: string | null;
    acceptingPort?: string | null;
    invoiceOn?: string | null;
    retrieveDate?: string | null;
    retrieveLocation?: string | null;
    scGeneral?: number;
    scMainRun?: number;
    scTrail?: number;
    portOfDeparture?: string | null;
    ets?: string | null;
    eta?: string | null;
    boat?: string | null;
    approvedByCrTl?: boolean;
    approvedByCrTlTime?: string | null;
    readonly orders?: Array<Order> | null;
}

