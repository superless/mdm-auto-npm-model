/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Facet } from './Facet';
import { FilterModel } from '../filters/FilterModel';
import { OrderItem } from './OrderItem';
import { EntityBaseSearch } from './../main/EntityBaseSearch';
import { GeoPointTs } from './../main/GeoPointTs';

export interface CollectionResult {
    total: number;
    entities: EntityBaseSearch<GeoPointTs>;
    current: number;
    facets?: Facet[];
    filter?: FilterModel;
    indexPropDefaultName: number;
    indexPropNames?: { [key: number]: number[]; };
    orderItems: OrderItem[];
    onlyForTsGeneticEntity: GeoPointTs;
}
