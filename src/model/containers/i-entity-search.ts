/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IBoolProperty } from '../main/i-bool-property';
import { IDblProperty } from '../main/i-dbl-property';
import { IDtProperty } from '../main/i-dt-property';
import { IEnumProperty } from '../main/i-enum-property';
import { INum32Property } from '../main/i-num32-property';
import { INum64Property } from '../main/i-num64-property';
import { IRelatedId } from '../main/i-related-id';
import { IStrProperty } from '../main/i-str-property';
import { IProperty } from '../main/i-property';

export interface IEntitySearch<T> {
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
    geo: IProperty<T>[];
}
