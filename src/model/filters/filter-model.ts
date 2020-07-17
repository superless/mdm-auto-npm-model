/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { FilterBase } from './filter-base';

export interface FilterModel {
    filterStr?: { [key: number]: FilterBase<string>[]; };
    filterEntity?: { [key: number]: FilterBase<string>[]; };
    enumFilter?: { [key: number]: FilterBase<number>[]; };
    longFilter?: { [key: number]: FilterBase<number>[]; };
    numFilter?: { [key: number]: FilterBase<number>[]; };
    boolFilters?: { [key: number]: FilterBase<boolean>[]; };
    dateFilters?: { [key: number]: FilterBase<Date>[]; };
    doubleFilters?: { [key: number]: FilterBase<number>[]; };
}
