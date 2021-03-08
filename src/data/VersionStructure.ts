/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { PackageType } from './PackageType';
import { CommitVersion } from './CommitVersion';
import { CommitPackageVersion } from './CommitPackageVersion';
import { Dependency } from './Dependency';

export interface VersionStructure {
    packageName: string;
    packageType: PackageType;
    githubHttp: string;
    githubSsh: string;
    versions: CommitVersion[];
    dependantVersions: CommitPackageVersion[];
    dependencies: Dependency[];
}
