/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IBoolProperty } from './i-bool-property';
import { IDblProperty } from './i-dbl-property';
import { IDtProperty } from './i-dt-property';
import { IEnumProperty } from './i-enum-property';
import { INum32Property } from './i-num32-property';
import { INum64Property } from './i-num64-property';
import { IRelatedId } from './i-related-id';
import { IStrProperty } from './i-str-property';
import { IProperty } from './i-property';
import { GeoPointTs } from './geo-point-ts';

export interface EntitySearch {
    id: string;
    created: Date;
    index: number;
    bl: IBoolProperty[];
    dbl: IDblProperty[];
    dt: IDtProperty[];
    enm: IEnumProperty[];
    num32: INum32Property[];
    num64: INum64Property[];
    rel: IRelatedId[];
    str: IStrProperty[];
    sug: IStrProperty[];
    geo: IProperty<GeoPointTs>[];
}
