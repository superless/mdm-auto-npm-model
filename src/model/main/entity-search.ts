/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { SuggestProperty } from './suggest-property';
import { StrProperty } from './str-property';
import { EnumProperty } from './enum-property';
import { Num32Property } from './num32-property';
import { Num64Property } from './num64-property';
import { DblProperty } from './dbl-property';
import { DtProperty } from './dt-property';
import { BoolProperty } from './bool-property';
import { ReletadIdTs } from './reletad-id-ts';
import { GeographyProperty } from './geography-property';

export interface EntitySearch {
  id: string;
  entityIndex: number[];
  created: Date;
  rel: ReletadIdTs[];
  sug: SuggestProperty[];
  str: StrProperty[];
  enum: EnumProperty[];
  num32: Num32Property[];
  num64: Num64Property[];
  dbl: DblProperty[];
  dt: DtProperty[];
  geo: GeographyProperty[];
  bl: BoolProperty[];
}
