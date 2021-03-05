/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputPropDetails } from './InputPropDetails';
import { InputPropRelatedDetails } from './InputPropRelatedDetails';
import { InputDetails } from './InputDetails';

export interface InputDetails {
    inputPropsDetails: { [key: string]: InputPropDetails; };
    inputRelatedDetails: { [key: string]: InputPropRelatedDetails; };
    relatedInputs: { [key: string]: InputDetails; };
    validationsGroup: { [key: number]: string[][]; };
}
