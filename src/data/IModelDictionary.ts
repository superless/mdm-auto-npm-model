/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IDefaultDictionary } from "./IDefaultDictionary";
import { IEnumDictionary } from "./IEnumDictionary";

export interface IModelDictionary {
    relatedData: { [key: number]: IDefaultDictionary; };
    stringData: { [key: number]: IDefaultDictionary; };
    numData: { [key: number]: IDefaultDictionary; };
    doubleData: { [key: number]: IDefaultDictionary; };
    boolData: { [key: number]: IDefaultDictionary; };
    geoData: { [key: number]: IDefaultDictionary; };
    dateData: { [key: number]: IDefaultDictionary; };
    enumData: { [key: number]: IEnumDictionary; };
}
