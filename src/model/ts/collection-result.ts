/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Facet } from './facet';
import { FilterModel } from './filter-model';
import { OrderItem } from './order-item';
import { EntitySearch } from './../main/entity-search';

export interface CollectionResult {
    total: number;
    entities: EntitySearch[];
    current: number;
    facets?: Facet[];
    filter?: FilterModel;
    indexPropDefaultName: number;
    indexPropNames?: { [key: number]: number[]; };
    orderItems: OrderItem[];
}
