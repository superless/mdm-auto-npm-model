/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IEntitySearch } from './i-entity-search';
import { GeoPointTs } from '../main/geo-point-ts';
import { Facet } from './facet';
import { FilterModel } from '../filters/filter-model';
import { OrderItem } from './order-item';

export interface CollectionResult {
    total: number;
    entities: IEntitySearch<GeoPointTs>[];
    current: number;
    facets?: Facet[];
    filter?: FilterModel;
    indexPropDefaultName: number;
    indexPropNames?: { [key: number]: number[]; };
    orderItems: OrderItem[];
}
