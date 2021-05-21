/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Semantic } from './Semantic';

export interface CommitVersion {
    branch: string;
    lastUpdate: Date;
    semanticBaseVersion: Semantic;
    preReleaseLabel: string;
    preview: number;
    dependantRelease: boolean;
    isFeature: boolean;
    build: string;
}
