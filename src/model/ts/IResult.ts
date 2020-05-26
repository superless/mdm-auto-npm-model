/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IFacet } from "./IFacet";
import { IFilterModel } from "./IFilterModel";
import { Related } from "../enums/Related";
import { IEntitySearch } from "./../main/IEntitySearch";

export interface IResult {
    total: number;
    entities: IEntitySearch[];
    current: number;
    facets: IFacet[];
    filter: IFilterModel;
    entityKindSort?: Related;
    byDesc?: boolean;
    indexSorted?: number;
}
