/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { FilterType } from "../enums/FilterType";

export interface IFilterBase<T> {
    index: number;
    filterType: FilterType;
    value: T;
}
