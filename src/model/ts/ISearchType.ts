/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { TypeEntity } from "./enum/TypeEntity";

export interface ISearchType {
    EntityType: TypeEntity;
    Name: string;
    MaxOptions: number;
    Default: boolean;
    MainEntityIndex?: number;
    EntitySearchTypeIndex?: number;
    DataDependant?: boolean;
    PropertyIndex?: number;
    PropertyCategoryIndex?: number;
    CategoryIndex?: number;
    MessageNotFound?: string;
    PlaceHolder?: string;
}
