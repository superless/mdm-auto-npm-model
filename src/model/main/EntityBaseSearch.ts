/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IProperty } from './IProperty';
import { BoolProperty } from './BoolProperty[]';
import { DblProperty } from './DblProperty[]';
import { DtProperty } from './DtProperty[]';
import { EnumProperty } from './EnumProperty[]';
import { Num32Property } from './Num32Property[]';
import { Num64Property } from './Num64Property[]';
import { RelatedId } from './RelatedId[]';
import { StrProperty } from './StrProperty[]';

export interface EntityBaseSearch<T> {
    id: string;
    created: Date;
    index: number;
    bl: BoolProperty;
    dbl: DblProperty;
    dt: DtProperty;
    enm: EnumProperty;
    num32: Num32Property;
    num64: Num64Property;
    rel: RelatedId;
    str: StrProperty;
    sug: StrProperty;
    hm: string;
    hh: string;
    geo: IProperty<T>[];
}
