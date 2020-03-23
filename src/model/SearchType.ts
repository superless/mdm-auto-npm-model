
export interface SearchType {
  entityType: TypeEntity;
  name: string;
  maxOptions: number;
  default: boolean;
  mainEntityIndex?: number;
  entitySearchTypeIndex?: number;
  dataDependant?: boolean;
  propertyIndex?: number;
  propertyCategoryIndex?: number;
  categoryIndex?:number;
  messageNotFound?:string;
  placeHolder:string;
  
}

export type TypeEntity = "search" | "selected" | "selectedGroup";