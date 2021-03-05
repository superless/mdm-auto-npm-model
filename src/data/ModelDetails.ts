/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { PropertyMetadata } from './PropertyMetadata';
import { RelatedPropertyMetadata } from './RelatedPropertyMetadata';
import { ModelDetails } from './ModelDetails';

export interface ModelDetails {
    propsDetails: { [key: string]: PropertyMetadata; };
    inputRelatedDetails: { [key: string]: RelatedPropertyMetadata; };
    relatedInputs: { [key: string]: ModelDetails; };
}
