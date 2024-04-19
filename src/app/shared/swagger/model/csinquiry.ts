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
import { ArticleCR } from './articleCR';


export interface Csinquiry { 
    id?: number;
    abnumber?: number;
    grossWeightInKg?: number;
    country?: string | null;
    incoterm?: string | null;
    containersizeA?: number;
    containersizeB?: number;
    containersizeHc?: number;
    freeDetention?: number;
    thctb?: boolean;
    thcc?: boolean;
    readyToLoad?: string;
    approvedByCrCs?: boolean;
    approvedByCrCsTime?: string | null;
    isDirectLine?: boolean;
    isFastLine?: boolean;
    readonly articles?: Array<ArticleCR> | null;
    readonly orders?: Array<Order> | null;
}

