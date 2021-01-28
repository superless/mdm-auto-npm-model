/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Facet } from './Facet';
import { EntityBaseSearch } from './../main/EntityBaseSearch';

export interface ICollectionResult<T> {
    total: number;
    entities: EntityBaseSearch<T>[];
    facets?: Facet[];
}
