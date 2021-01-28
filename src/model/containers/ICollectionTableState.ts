/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { FilterModel } from '../filters/FilterModel';
import { OrderItem } from './OrderItem';

export interface ICollectionTableState<T> {
    current: number;
    index: number;
    filter: FilterModel;
    indexPropNames: { [key: number]: number[]; };
    orderItems: OrderItem[];
}
