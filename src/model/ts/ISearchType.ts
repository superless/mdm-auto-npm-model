/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { TypeEntity } from "./enum/TypeEntity";

export interface ISearchType {
    entityType: TypeEntity;
    name: string;
    maxOptions: number;
    default: boolean;
    mainEntityIndex?: number;
    entitySearchTypeIndex?: number;
    dataDependant?: boolean;
    propertyIndex?: number;
    propertyCategoryIndex?: number;
    categoryIndex?: number;
    messageNotFound?: string;
    placeHolder?: string;
}
