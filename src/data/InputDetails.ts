/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputPropDetails } from './InputPropDetails';
import { InputPropRelatedDetails } from './InputPropRelatedDetails';
import { InputPropEnumDetails } from './InputPropEnumDetails';

export interface InputDetails {
    inputPropsDetails: { [key: string]: InputPropDetails; };
    inputRelatedDetails: { [key: string]: InputPropRelatedDetails; };
    inputEnumDetails: { [key: string]: InputPropEnumDetails; };
    relatedInputs: { [key: string]: InputDetails; };
    validationsGroup: { [key: number]: string[][]; };
}
