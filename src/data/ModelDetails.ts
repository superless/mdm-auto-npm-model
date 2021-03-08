/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { PropertyMetadata } from './PropertyMetadata';
import { RelatedPropertyMetadata } from './RelatedPropertyMetadata';

export interface ModelDetails {
    propsDetails: { [key: string]: PropertyMetadata; };
    relatedDetails: { [key: string]: RelatedPropertyMetadata; };
    relatedInputs: { [key: string]: ModelDetails; };
}
