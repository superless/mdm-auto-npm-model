/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ISuggestProperty } from "./ISuggestProperty";
import { IStrProperty } from "./IStrProperty";
import { IEnumProperty } from "./IEnumProperty";
import { INum32Property } from "./INum32Property";
import { INum64Property } from "./INum64Property";
import { IDblProperty } from "./IDblProperty";
import { IDtProperty } from "./IDtProperty";
import { IReletadIdTs } from "./IReletadIdTs";
import { IGeographyProperty } from "./IGeographyProperty";

export interface IEntitySearch {
    id: string;
    entityIndex: number;
    created: Date;
    rel: IReletadIdTs;
    sug: ISuggestProperty[];
    str: IStrProperty[];
    enum: IEnumProperty[];
    num32: INum32Property[];
    num64: INum64Property[];
    dbl: IDblProperty[];
    dt: IDtProperty[];
    geo: IGeographyProperty;
}
