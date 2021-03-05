/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GroupMenu } from '../model/containers/GroupMenu';
import { EntityKind } from './EntityKind';
import { PropertyMetadata } from './PropertyMetadata';
import { PropertyMetadadataEnum } from './PropertyMetadadataEnum';
import { RelatedPropertyMetadata } from './RelatedPropertyMetadata';

export interface EntityMetadata {
    title: string;
    shortName: string;
    description: string;
    index: number;
    visible: boolean;
    menus: GroupMenu[];
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
    relData: { [key: number]: RelatedPropertyMetadata; };
}
