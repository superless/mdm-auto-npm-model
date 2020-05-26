/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IFilterBase } from "./IFilterBase";

export interface IFilterModel {
    filterStr: { [key: number]: IFilterBase<string>; };
    filterEntity: { [key: number]: IFilterBase<string>; };
    enumFilter: { [key: number]: IFilterBase<number>; };
    longFilter: { [key: number]: IFilterBase<number>; };
    numFilter: { [key: number]: IFilterBase<number>; };
    boolFilters: { [key: number]: IFilterBase<boolean>; };
    dateFilters: { [key: number]: IFilterBase<Date>; };
    doubleFilters: { [key: number]: IFilterBase<number>; };
}
