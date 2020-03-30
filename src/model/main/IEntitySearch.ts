/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IRelatedId } from "./IRelatedId";
import { ISuggestProperty } from "./ISuggestProperty";
import { IStrProperty } from "./IStrProperty";
import { IEnumProperty } from "./IEnumProperty";
import { INum32Property } from "./INum32Property";
import { INum64Property } from "./INum64Property";
import { IDblProperty } from "./IDblProperty";
import { IDtProperty } from "./IDtProperty";
import { IGeographyProperty } from "./IGeographyProperty";

export interface IEntitySearch {
    id: string;
    entityIndex: number;
    created: Date;
    prop_rel: IRelatedId[];
    prop_sug: ISuggestProperty[];
    prop_str: IStrProperty[];
    prop_enum: IEnumProperty[];
    prop_num32: INum32Property[];
    prop_num64: INum64Property[];
    prop_dbl: IDblProperty[];
    prop_dt: IDtProperty[];
    prop_geo: IGeographyProperty;
}
