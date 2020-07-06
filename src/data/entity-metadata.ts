/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { EntityKind } from './entity-kind';
import { PropertyMetadata } from './property-metadata';
import { PropertyMetadadataEnum } from './property-metadadata-enum';

export interface EntityMetadata {
    title: string;
    shortName: string;
    description: string;
    index: number;
    visible: boolean;
    entityKind: EntityKind;
    pathName: string;
    autoNumeric: boolean;
    className: string;
    stringData: { [key: number]: PropertyMetadata; };
    numData: { [key: number]: PropertyMetadata; };
    doubleData: { [key: number]: PropertyMetadata; };
    boolData: { [key: number]: PropertyMetadata; };
    geoData: { [key: number]: PropertyMetadata; };
    dateData: { [key: number]: PropertyMetadata; };
    enumData: { [key: number]: PropertyMetadadataEnum; };
    relData: { [key: number]: PropertyMetadata; };
}
