/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { PropertyMetadata } from './PropertyMetadata';
import { PropertyMetadadataEnum } from './PropertyMetadadataEnum';
import { RelatedPropertyMetadata } from './RelatedPropertyMetadata';

export interface ModelDetails {
    propsDetails: { [key: string]: PropertyMetadata; };
    propsEnumDetails: { [key: string]: PropertyMetadadataEnum; };
    relatedDetails: { [key: string]: RelatedPropertyMetadata; };
    relatedModels: { [key: string]: ModelDetails; };
}
