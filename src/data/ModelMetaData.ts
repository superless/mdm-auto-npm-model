/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { VersionStructure } from './VersionStructure';
import { EntityMetadata } from './EntityMetadata';
import { GlobalFilters } from './GlobalFilters';
import { EnumDescription } from './EnumDescription';
import { MainDocumentation } from './MainDocumentation';
import { GroupMenuViewer } from './GroupMenuViewer';
import { DocFilter } from './DocFilter';

export interface ModelMetaData {
    version: string;
    versionStructure: VersionStructure;
    mdmEntities: EntityMetadata[];
    globalFilters: GlobalFilters;
    enumDescriptions: EnumDescription[];
    mainDocumentation: MainDocumentation;
    menu: GroupMenuViewer[];
    docFilters: DocFilter[];
}
