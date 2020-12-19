/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IBoolProperty } from './IBoolProperty';
import { IDblProperty } from './IDblProperty';
import { IDtProperty } from './IDtProperty';
import { IEnumProperty } from './IEnumProperty';
import { INum32Property } from './INum32Property';
import { INum64Property } from './INum64Property';
import { IRelatedId } from './IRelatedId';
import { IStrProperty } from './IStrProperty';
import { IProperty } from './IProperty';

export interface EntityBaseSearch<T> {
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
    hm: string;
    hh: string;
    geo: IProperty<T>[];
}
