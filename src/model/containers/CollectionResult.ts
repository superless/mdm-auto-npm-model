/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { IEntitySearch } from './IEntitySearch';
import { GeoPointTs } from '../main/GeoPointTs';
import { Facet } from './Facet';
import { FilterModel } from '../filters/FilterModel';
import { OrderItem } from './OrderItem';

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
