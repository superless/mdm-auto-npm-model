/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { EntityRelated } from "../model/enums/EntityRelated";
import { IDefaultDictionary } from "./IDefaultDictionary";
import { IEnumDictionary } from "./IEnumDictionary";

export interface IModelDictionary {
    Title: string;
    ShortName: string;
    Description: string;
    Index: EntityRelated;
    StringData: { [key: number]: IDefaultDictionary; };
    NumData: { [key: number]: IDefaultDictionary; };
    DoubleData: { [key: number]: IDefaultDictionary; };
    BoolData: { [key: number]: IDefaultDictionary; };
    GeoData: { [key: number]: IDefaultDictionary; };
    DateData: { [key: number]: IDefaultDictionary; };
    EnumData: { [key: number]: IEnumDictionary; };
}
