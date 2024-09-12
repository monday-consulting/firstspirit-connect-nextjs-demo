/* eslint-disable */
// @ts-nocheck
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export enum FieldSelectorEnum {
  Select = 'SELECT'
}

export type FirstSpiritChangeInfo = {
  __typename?: 'FirstSpiritChangeInfo';
  date: Scalars['Date']['output'];
  lastSynced: Scalars['Int']['output'];
  revision: Scalars['Int']['output'];
};

export type FirstSpiritChangeInfoFieldSelector = {
  date?: InputMaybe<FieldSelectorEnum>;
  lastSynced?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritChangeInfoFilterInput = {
  date?: InputMaybe<DateQueryOperatorInput>;
  lastSynced?: InputMaybe<IntQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
};

export type FirstSpiritChangeInfoSortInput = {
  date?: InputMaybe<SortOrderEnum>;
  lastSynced?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritDataset = Node & {
  __typename?: 'FirstSpiritDataset';
  _locale?: Maybe<Scalars['String']['output']>;
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritDataset>>>;
  children: Array<Node>;
  data: Scalars['JSON']['output'];
  entityType: Scalars['String']['output'];
  fsId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
  previewId: Scalars['String']['output'];
  remoteProjectId?: Maybe<Scalars['String']['output']>;
  route: Scalars['String']['output'];
  routes?: Maybe<Array<Maybe<FirstSpiritDatasetRoute>>>;
  schema: Scalars['String']['output'];
  sections?: Maybe<Array<Maybe<FirstSpiritSection>>>;
  template: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FirstSpiritDatasetConnection = {
  __typename?: 'FirstSpiritDatasetConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritDatasetEdge>;
  group: Array<FirstSpiritDatasetGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritDataset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritDatasetConnectionDistinctArgs = {
  field: FirstSpiritDatasetFieldSelector;
};


export type FirstSpiritDatasetConnectionGroupArgs = {
  field: FirstSpiritDatasetFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritDatasetConnectionMaxArgs = {
  field: FirstSpiritDatasetFieldSelector;
};


export type FirstSpiritDatasetConnectionMinArgs = {
  field: FirstSpiritDatasetFieldSelector;
};


export type FirstSpiritDatasetConnectionSumArgs = {
  field: FirstSpiritDatasetFieldSelector;
};

export type FirstSpiritDatasetEdge = {
  __typename?: 'FirstSpiritDatasetEdge';
  next?: Maybe<FirstSpiritDataset>;
  node: FirstSpiritDataset;
  previous?: Maybe<FirstSpiritDataset>;
};

export type FirstSpiritDatasetFieldSelector = {
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritDatasetFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  data?: InputMaybe<FieldSelectorEnum>;
  entityType?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  previewId?: InputMaybe<FieldSelectorEnum>;
  remoteProjectId?: InputMaybe<FieldSelectorEnum>;
  route?: InputMaybe<FieldSelectorEnum>;
  routes?: InputMaybe<FirstSpiritDatasetRouteFieldSelector>;
  schema?: InputMaybe<FieldSelectorEnum>;
  sections?: InputMaybe<FirstSpiritSectionFieldSelector>;
  template?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritDatasetFilterInput = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritDatasetFilterInput>;
  children?: InputMaybe<NodeFilterInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  entityType?: InputMaybe<StringQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  route?: InputMaybe<StringQueryOperatorInput>;
  routes?: InputMaybe<FirstSpiritDatasetRouteFilterInput>;
  schema?: InputMaybe<StringQueryOperatorInput>;
  sections?: InputMaybe<FirstSpiritSectionFilterInput>;
  template?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritDatasetFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritDatasetFilterInput>;
};

export type FirstSpiritDatasetGroupConnection = {
  __typename?: 'FirstSpiritDatasetGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritDatasetEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FirstSpiritDatasetGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritDataset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritDatasetGroupConnectionDistinctArgs = {
  field: FirstSpiritDatasetFieldSelector;
};


export type FirstSpiritDatasetGroupConnectionGroupArgs = {
  field: FirstSpiritDatasetFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritDatasetGroupConnectionMaxArgs = {
  field: FirstSpiritDatasetFieldSelector;
};


export type FirstSpiritDatasetGroupConnectionMinArgs = {
  field: FirstSpiritDatasetFieldSelector;
};


export type FirstSpiritDatasetGroupConnectionSumArgs = {
  field: FirstSpiritDatasetFieldSelector;
};

export type FirstSpiritDatasetRoute = {
  __typename?: 'FirstSpiritDatasetRoute';
  pageRef: FirstSpiritPage;
  route: Scalars['String']['output'];
};

export type FirstSpiritDatasetRouteFieldSelector = {
  pageRef?: InputMaybe<FirstSpiritPageFieldSelector>;
  route?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritDatasetRouteFilterInput = {
  pageRef?: InputMaybe<FirstSpiritPageFilterInput>;
  route?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritDatasetRouteFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritDatasetRouteFilterInput>;
};

export type FirstSpiritDatasetRouteSortInput = {
  pageRef?: InputMaybe<FirstSpiritPageSortInput>;
  route?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritDatasetSortInput = {
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritDatasetSortInput>;
  children?: InputMaybe<NodeSortInput>;
  data?: InputMaybe<SortOrderEnum>;
  entityType?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  previewId?: InputMaybe<SortOrderEnum>;
  remoteProjectId?: InputMaybe<SortOrderEnum>;
  route?: InputMaybe<SortOrderEnum>;
  routes?: InputMaybe<FirstSpiritDatasetRouteSortInput>;
  schema?: InputMaybe<SortOrderEnum>;
  sections?: InputMaybe<FirstSpiritSectionSortInput>;
  template?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritGcaPage = Node & {
  __typename?: 'FirstSpiritGcaPage';
  _locale?: Maybe<Scalars['String']['output']>;
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritGcaPage>>>;
  children: Array<Node>;
  data: Scalars['JSON']['output'];
  fsId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  layout: Scalars['String']['output'];
  meta: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  pageBodies?: Maybe<Array<Maybe<FirstSpiritPageBody>>>;
  parent?: Maybe<Node>;
  previewId: Scalars['String']['output'];
  remoteProjectId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type FirstSpiritGcaPageConnection = {
  __typename?: 'FirstSpiritGcaPageConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritGcaPageEdge>;
  group: Array<FirstSpiritGcaPageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritGcaPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritGcaPageConnectionDistinctArgs = {
  field: FirstSpiritGcaPageFieldSelector;
};


export type FirstSpiritGcaPageConnectionGroupArgs = {
  field: FirstSpiritGcaPageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritGcaPageConnectionMaxArgs = {
  field: FirstSpiritGcaPageFieldSelector;
};


export type FirstSpiritGcaPageConnectionMinArgs = {
  field: FirstSpiritGcaPageFieldSelector;
};


export type FirstSpiritGcaPageConnectionSumArgs = {
  field: FirstSpiritGcaPageFieldSelector;
};

export type FirstSpiritGcaPageEdge = {
  __typename?: 'FirstSpiritGcaPageEdge';
  next?: Maybe<FirstSpiritGcaPage>;
  node: FirstSpiritGcaPage;
  previous?: Maybe<FirstSpiritGcaPage>;
};

export type FirstSpiritGcaPageFieldSelector = {
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritGcaPageFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  data?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  layout?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  previewId?: InputMaybe<FieldSelectorEnum>;
  remoteProjectId?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritGcaPageFilterInput = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritGcaPageFilterInput>;
  children?: InputMaybe<NodeFilterInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritGcaPageFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritGcaPageFilterInput>;
};

export type FirstSpiritGcaPageGroupConnection = {
  __typename?: 'FirstSpiritGcaPageGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritGcaPageEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FirstSpiritGcaPageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritGcaPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritGcaPageGroupConnectionDistinctArgs = {
  field: FirstSpiritGcaPageFieldSelector;
};


export type FirstSpiritGcaPageGroupConnectionGroupArgs = {
  field: FirstSpiritGcaPageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritGcaPageGroupConnectionMaxArgs = {
  field: FirstSpiritGcaPageFieldSelector;
};


export type FirstSpiritGcaPageGroupConnectionMinArgs = {
  field: FirstSpiritGcaPageFieldSelector;
};


export type FirstSpiritGcaPageGroupConnectionSumArgs = {
  field: FirstSpiritGcaPageFieldSelector;
};

export type FirstSpiritGcaPageSortInput = {
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritGcaPageSortInput>;
  children?: InputMaybe<NodeSortInput>;
  data?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  layout?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  pageBodies?: InputMaybe<FirstSpiritPageBodySortInput>;
  parent?: InputMaybe<NodeSortInput>;
  previewId?: InputMaybe<SortOrderEnum>;
  remoteProjectId?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritIdentifier = {
  __typename?: 'FirstSpiritIdentifier';
  languageId: Scalars['String']['output'];
  navigationId: Scalars['String']['output'];
  tenantId: Scalars['String']['output'];
};

export type FirstSpiritIdentifierFieldSelector = {
  languageId?: InputMaybe<FieldSelectorEnum>;
  navigationId?: InputMaybe<FieldSelectorEnum>;
  tenantId?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritIdentifierFilterInput = {
  languageId?: InputMaybe<StringQueryOperatorInput>;
  navigationId?: InputMaybe<StringQueryOperatorInput>;
  tenantId?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritIdentifierSortInput = {
  languageId?: InputMaybe<SortOrderEnum>;
  navigationId?: InputMaybe<SortOrderEnum>;
  tenantId?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritLifespan = {
  __typename?: 'FirstSpiritLifespan';
  end?: Maybe<Scalars['Date']['output']>;
  start: Scalars['Date']['output'];
};

export type FirstSpiritLifespanFieldSelector = {
  end?: InputMaybe<FieldSelectorEnum>;
  start?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritLifespanFilterInput = {
  end?: InputMaybe<DateQueryOperatorInput>;
  start?: InputMaybe<DateQueryOperatorInput>;
};

export type FirstSpiritLifespanSortInput = {
  end?: InputMaybe<SortOrderEnum>;
  start?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritMasterLocale = {
  __typename?: 'FirstSpiritMasterLocale';
  country: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  language: Scalars['String']['output'];
};

export type FirstSpiritMasterLocaleFieldSelector = {
  country?: InputMaybe<FieldSelectorEnum>;
  identifier?: InputMaybe<FieldSelectorEnum>;
  language?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritMasterLocaleFilterInput = {
  country?: InputMaybe<StringQueryOperatorInput>;
  identifier?: InputMaybe<StringQueryOperatorInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritMasterLocaleSortInput = {
  country?: InputMaybe<SortOrderEnum>;
  identifier?: InputMaybe<SortOrderEnum>;
  language?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritMeta = {
  __typename?: 'FirstSpiritMeta';
  identifier: FirstSpiritIdentifier;
};

export type FirstSpiritMetaFieldSelector = {
  identifier?: InputMaybe<FirstSpiritIdentifierFieldSelector>;
};

export type FirstSpiritMetaFilterInput = {
  identifier?: InputMaybe<FirstSpiritIdentifierFilterInput>;
};

export type FirstSpiritMetaSortInput = {
  identifier?: InputMaybe<FirstSpiritIdentifierSortInput>;
};

export type FirstSpiritNavigationData = Node & {
  __typename?: 'FirstSpiritNavigationData';
  _locale?: Maybe<Scalars['String']['output']>;
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritNavigationData>>>;
  changeInfo?: Maybe<FirstSpiritChangeInfo>;
  children: Array<Node>;
  fsId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  idList: Array<Maybe<FirstSpiritNavigationItem>>;
  internal: Internal;
  locale?: Maybe<FirstSpiritMasterLocale>;
  meta: FirstSpiritMeta;
  pages: FirstSpiritPages;
  parent?: Maybe<Node>;
  seoRouteList: Array<Maybe<FirstSpiritSeoRouteList>>;
  structure: Array<Maybe<FirstSpiritStructureItem>>;
  updatedAt: Scalars['String']['output'];
};

export type FirstSpiritNavigationDataConnection = {
  __typename?: 'FirstSpiritNavigationDataConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritNavigationDataEdge>;
  group: Array<FirstSpiritNavigationDataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritNavigationData>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritNavigationDataConnectionDistinctArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
};


export type FirstSpiritNavigationDataConnectionGroupArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritNavigationDataConnectionMaxArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
};


export type FirstSpiritNavigationDataConnectionMinArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
};


export type FirstSpiritNavigationDataConnectionSumArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
};

export type FirstSpiritNavigationDataEdge = {
  __typename?: 'FirstSpiritNavigationDataEdge';
  next?: Maybe<FirstSpiritNavigationData>;
  node: FirstSpiritNavigationData;
  previous?: Maybe<FirstSpiritNavigationData>;
};

export type FirstSpiritNavigationDataFieldSelector = {
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritNavigationDataFieldSelector>;
  changeInfo?: InputMaybe<FirstSpiritChangeInfoFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  idList?: InputMaybe<FirstSpiritNavigationItemFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  locale?: InputMaybe<FirstSpiritMasterLocaleFieldSelector>;
  meta?: InputMaybe<FirstSpiritMetaFieldSelector>;
  pages?: InputMaybe<FirstSpiritPagesFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  seoRouteList?: InputMaybe<FirstSpiritSeoRouteListFieldSelector>;
  structure?: InputMaybe<FirstSpiritStructureItemFieldSelector>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritNavigationDataFilterInput = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritNavigationDataFilterInput>;
  changeInfo?: InputMaybe<FirstSpiritChangeInfoFilterInput>;
  children?: InputMaybe<NodeFilterInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  idList?: InputMaybe<FirstSpiritNavigationItemFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<FirstSpiritMasterLocaleFilterInput>;
  meta?: InputMaybe<FirstSpiritMetaFilterInput>;
  pages?: InputMaybe<FirstSpiritPagesFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoRouteList?: InputMaybe<FirstSpiritSeoRouteListFilterInput>;
  structure?: InputMaybe<FirstSpiritStructureItemFilterInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritNavigationDataFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritNavigationDataFilterInput>;
};

export type FirstSpiritNavigationDataGroupConnection = {
  __typename?: 'FirstSpiritNavigationDataGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritNavigationDataEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FirstSpiritNavigationDataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritNavigationData>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritNavigationDataGroupConnectionDistinctArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
};


export type FirstSpiritNavigationDataGroupConnectionGroupArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritNavigationDataGroupConnectionMaxArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
};


export type FirstSpiritNavigationDataGroupConnectionMinArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
};


export type FirstSpiritNavigationDataGroupConnectionSumArgs = {
  field: FirstSpiritNavigationDataFieldSelector;
};

export type FirstSpiritNavigationDataSortInput = {
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritNavigationDataSortInput>;
  changeInfo?: InputMaybe<FirstSpiritChangeInfoSortInput>;
  children?: InputMaybe<NodeSortInput>;
  fsId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  idList?: InputMaybe<FirstSpiritNavigationItemSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  locale?: InputMaybe<FirstSpiritMasterLocaleSortInput>;
  meta?: InputMaybe<FirstSpiritMetaSortInput>;
  pages?: InputMaybe<FirstSpiritPagesSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  seoRouteList?: InputMaybe<FirstSpiritSeoRouteListSortInput>;
  structure?: InputMaybe<FirstSpiritStructureItemSortInput>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritNavigationItem = {
  __typename?: 'FirstSpiritNavigationItem';
  caasDocumentId?: Maybe<Scalars['String']['output']>;
  contentReference?: Maybe<Scalars['String']['output']>;
  customData?: Maybe<Scalars['String']['output']>;
  fsNavItemId: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  page?: Maybe<FirstSpiritPage>;
  parentIds: Array<Maybe<Scalars['String']['output']>>;
  permissions?: Maybe<FirstSpiritPermission>;
  seoRoute?: Maybe<Scalars['String']['output']>;
  seoRouteRegex?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritNavigationItemFieldSelector = {
  caasDocumentId?: InputMaybe<FieldSelectorEnum>;
  contentReference?: InputMaybe<FieldSelectorEnum>;
  customData?: InputMaybe<FieldSelectorEnum>;
  fsNavItemId?: InputMaybe<FieldSelectorEnum>;
  label?: InputMaybe<FieldSelectorEnum>;
  page?: InputMaybe<FirstSpiritPageFieldSelector>;
  parentIds?: InputMaybe<FieldSelectorEnum>;
  permissions?: InputMaybe<FirstSpiritPermissionFieldSelector>;
  seoRoute?: InputMaybe<FieldSelectorEnum>;
  seoRouteRegex?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritNavigationItemFilterInput = {
  caasDocumentId?: InputMaybe<StringQueryOperatorInput>;
  contentReference?: InputMaybe<StringQueryOperatorInput>;
  customData?: InputMaybe<StringQueryOperatorInput>;
  fsNavItemId?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<FirstSpiritPageFilterInput>;
  parentIds?: InputMaybe<StringQueryOperatorInput>;
  permissions?: InputMaybe<FirstSpiritPermissionFilterInput>;
  seoRoute?: InputMaybe<StringQueryOperatorInput>;
  seoRouteRegex?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritNavigationItemFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritNavigationItemFilterInput>;
};

export type FirstSpiritNavigationItemSortInput = {
  caasDocumentId?: InputMaybe<SortOrderEnum>;
  contentReference?: InputMaybe<SortOrderEnum>;
  customData?: InputMaybe<SortOrderEnum>;
  fsNavItemId?: InputMaybe<SortOrderEnum>;
  label?: InputMaybe<SortOrderEnum>;
  page?: InputMaybe<FirstSpiritPageSortInput>;
  parentIds?: InputMaybe<SortOrderEnum>;
  permissions?: InputMaybe<FirstSpiritPermissionSortInput>;
  seoRoute?: InputMaybe<SortOrderEnum>;
  seoRouteRegex?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritPage = Node & {
  __typename?: 'FirstSpiritPage';
  _locale?: Maybe<Scalars['String']['output']>;
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritPage>>>;
  children: Array<Node>;
  data: Scalars['JSON']['output'];
  fsId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  layout: Scalars['String']['output'];
  meta: Scalars['JSON']['output'];
  metaPageRefs?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  pageBodies?: Maybe<Array<Maybe<FirstSpiritPageBody>>>;
  parent?: Maybe<Node>;
  previewId: Scalars['String']['output'];
  refId: Scalars['String']['output'];
  remoteProjectId?: Maybe<Scalars['String']['output']>;
  route?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type FirstSpiritPageBody = {
  __typename?: 'FirstSpiritPageBody';
  children?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  name: Scalars['String']['output'];
  previewId: Scalars['String']['output'];
};

export type FirstSpiritPageBodyFieldSelector = {
  children?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  previewId?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritPageBodyFilterInput = {
  children?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritPageBodyFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritPageBodyFilterInput>;
};

export type FirstSpiritPageBodySortInput = {
  children?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  previewId?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritPageConnection = {
  __typename?: 'FirstSpiritPageConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritPageEdge>;
  group: Array<FirstSpiritPageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritPageConnectionDistinctArgs = {
  field: FirstSpiritPageFieldSelector;
};


export type FirstSpiritPageConnectionGroupArgs = {
  field: FirstSpiritPageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritPageConnectionMaxArgs = {
  field: FirstSpiritPageFieldSelector;
};


export type FirstSpiritPageConnectionMinArgs = {
  field: FirstSpiritPageFieldSelector;
};


export type FirstSpiritPageConnectionSumArgs = {
  field: FirstSpiritPageFieldSelector;
};

export type FirstSpiritPageEdge = {
  __typename?: 'FirstSpiritPageEdge';
  next?: Maybe<FirstSpiritPage>;
  node: FirstSpiritPage;
  previous?: Maybe<FirstSpiritPage>;
};

export type FirstSpiritPageFieldSelector = {
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritPageFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  data?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  layout?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<FieldSelectorEnum>;
  metaPageRefs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  previewId?: InputMaybe<FieldSelectorEnum>;
  refId?: InputMaybe<FieldSelectorEnum>;
  remoteProjectId?: InputMaybe<FieldSelectorEnum>;
  route?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritPageFilterInput = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritPageFilterInput>;
  children?: InputMaybe<NodeFilterInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<JsonQueryOperatorInput>;
  metaPageRefs?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  refId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  route?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritPageFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritPageFilterInput>;
};

export type FirstSpiritPageGroupConnection = {
  __typename?: 'FirstSpiritPageGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritPageEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FirstSpiritPageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritPageGroupConnectionDistinctArgs = {
  field: FirstSpiritPageFieldSelector;
};


export type FirstSpiritPageGroupConnectionGroupArgs = {
  field: FirstSpiritPageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritPageGroupConnectionMaxArgs = {
  field: FirstSpiritPageFieldSelector;
};


export type FirstSpiritPageGroupConnectionMinArgs = {
  field: FirstSpiritPageFieldSelector;
};


export type FirstSpiritPageGroupConnectionSumArgs = {
  field: FirstSpiritPageFieldSelector;
};

export type FirstSpiritPageSortInput = {
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritPageSortInput>;
  children?: InputMaybe<NodeSortInput>;
  data?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  layout?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<SortOrderEnum>;
  metaPageRefs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  pageBodies?: InputMaybe<FirstSpiritPageBodySortInput>;
  parent?: InputMaybe<NodeSortInput>;
  previewId?: InputMaybe<SortOrderEnum>;
  refId?: InputMaybe<SortOrderEnum>;
  remoteProjectId?: InputMaybe<SortOrderEnum>;
  route?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritPages = {
  __typename?: 'FirstSpiritPages';
  index: Scalars['String']['output'];
};

export type FirstSpiritPagesFieldSelector = {
  index?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritPagesFilterInput = {
  index?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritPagesSortInput = {
  index?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritPermission = {
  __typename?: 'FirstSpiritPermission';
  allowed?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  denied?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FirstSpiritPermissionFieldSelector = {
  allowed?: InputMaybe<FieldSelectorEnum>;
  denied?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritPermissionFilterInput = {
  allowed?: InputMaybe<StringQueryOperatorInput>;
  denied?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritPermissionSortInput = {
  allowed?: InputMaybe<SortOrderEnum>;
  denied?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritProjectProperties = Node & {
  __typename?: 'FirstSpiritProjectProperties';
  _locale?: Maybe<Scalars['String']['output']>;
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritProjectProperties>>>;
  children: Array<Node>;
  data: Scalars['JSON']['output'];
  fsChildren?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fsId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  layout: Scalars['String']['output'];
  masterLocale?: Maybe<FirstSpiritMasterLocale>;
  meta: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Node>;
  previewId: Scalars['String']['output'];
  remoteProjectId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type FirstSpiritProjectPropertiesConnection = {
  __typename?: 'FirstSpiritProjectPropertiesConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritProjectPropertiesEdge>;
  group: Array<FirstSpiritProjectPropertiesGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritProjectProperties>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritProjectPropertiesConnectionDistinctArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
};


export type FirstSpiritProjectPropertiesConnectionGroupArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritProjectPropertiesConnectionMaxArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
};


export type FirstSpiritProjectPropertiesConnectionMinArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
};


export type FirstSpiritProjectPropertiesConnectionSumArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
};

export type FirstSpiritProjectPropertiesEdge = {
  __typename?: 'FirstSpiritProjectPropertiesEdge';
  next?: Maybe<FirstSpiritProjectProperties>;
  node: FirstSpiritProjectProperties;
  previous?: Maybe<FirstSpiritProjectProperties>;
};

export type FirstSpiritProjectPropertiesFieldSelector = {
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritProjectPropertiesFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  data?: InputMaybe<FieldSelectorEnum>;
  fsChildren?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  layout?: InputMaybe<FieldSelectorEnum>;
  masterLocale?: InputMaybe<FirstSpiritMasterLocaleFieldSelector>;
  meta?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  previewId?: InputMaybe<FieldSelectorEnum>;
  remoteProjectId?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritProjectPropertiesFilterInput = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritProjectPropertiesFilterInput>;
  children?: InputMaybe<NodeFilterInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  fsChildren?: InputMaybe<StringQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  masterLocale?: InputMaybe<FirstSpiritMasterLocaleFilterInput>;
  meta?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritProjectPropertiesFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritProjectPropertiesFilterInput>;
};

export type FirstSpiritProjectPropertiesGroupConnection = {
  __typename?: 'FirstSpiritProjectPropertiesGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritProjectPropertiesEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FirstSpiritProjectPropertiesGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritProjectProperties>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritProjectPropertiesGroupConnectionDistinctArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
};


export type FirstSpiritProjectPropertiesGroupConnectionGroupArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritProjectPropertiesGroupConnectionMaxArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
};


export type FirstSpiritProjectPropertiesGroupConnectionMinArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
};


export type FirstSpiritProjectPropertiesGroupConnectionSumArgs = {
  field: FirstSpiritProjectPropertiesFieldSelector;
};

export type FirstSpiritProjectPropertiesSortInput = {
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritProjectPropertiesSortInput>;
  children?: InputMaybe<NodeSortInput>;
  data?: InputMaybe<SortOrderEnum>;
  fsChildren?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  layout?: InputMaybe<SortOrderEnum>;
  masterLocale?: InputMaybe<FirstSpiritMasterLocaleSortInput>;
  meta?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  previewId?: InputMaybe<SortOrderEnum>;
  remoteProjectId?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritSection = Node & {
  __typename?: 'FirstSpiritSection';
  _locale?: Maybe<Scalars['String']['output']>;
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritSection>>>;
  children: Array<Node>;
  data: Scalars['JSON']['output'];
  displayName?: Maybe<Scalars['String']['output']>;
  displayed?: Maybe<Scalars['Boolean']['output']>;
  fsId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  lifespan?: Maybe<FirstSpiritLifespan>;
  name?: Maybe<Scalars['String']['output']>;
  page: FirstSpiritPage;
  parent?: Maybe<Node>;
  previewId: Scalars['String']['output'];
  section?: Maybe<Array<Maybe<FirstSpiritSection>>>;
  sectionType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FirstSpiritSectionConnection = {
  __typename?: 'FirstSpiritSectionConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritSectionEdge>;
  group: Array<FirstSpiritSectionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritSection>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritSectionConnectionDistinctArgs = {
  field: FirstSpiritSectionFieldSelector;
};


export type FirstSpiritSectionConnectionGroupArgs = {
  field: FirstSpiritSectionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritSectionConnectionMaxArgs = {
  field: FirstSpiritSectionFieldSelector;
};


export type FirstSpiritSectionConnectionMinArgs = {
  field: FirstSpiritSectionFieldSelector;
};


export type FirstSpiritSectionConnectionSumArgs = {
  field: FirstSpiritSectionFieldSelector;
};

export type FirstSpiritSectionEdge = {
  __typename?: 'FirstSpiritSectionEdge';
  next?: Maybe<FirstSpiritSection>;
  node: FirstSpiritSection;
  previous?: Maybe<FirstSpiritSection>;
};

export type FirstSpiritSectionFieldSelector = {
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritSectionFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  data?: InputMaybe<FieldSelectorEnum>;
  displayName?: InputMaybe<FieldSelectorEnum>;
  displayed?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  lifespan?: InputMaybe<FirstSpiritLifespanFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  page?: InputMaybe<FirstSpiritPageFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  previewId?: InputMaybe<FieldSelectorEnum>;
  section?: InputMaybe<FirstSpiritSectionFieldSelector>;
  sectionType?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritSectionFilterInput = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritSectionFilterInput>;
  children?: InputMaybe<NodeFilterInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  displayed?: InputMaybe<BooleanQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lifespan?: InputMaybe<FirstSpiritLifespanFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<FirstSpiritPageFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  section?: InputMaybe<FirstSpiritSectionFilterInput>;
  sectionType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritSectionFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritSectionFilterInput>;
};

export type FirstSpiritSectionGroupConnection = {
  __typename?: 'FirstSpiritSectionGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritSectionEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FirstSpiritSectionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritSection>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritSectionGroupConnectionDistinctArgs = {
  field: FirstSpiritSectionFieldSelector;
};


export type FirstSpiritSectionGroupConnectionGroupArgs = {
  field: FirstSpiritSectionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritSectionGroupConnectionMaxArgs = {
  field: FirstSpiritSectionFieldSelector;
};


export type FirstSpiritSectionGroupConnectionMinArgs = {
  field: FirstSpiritSectionFieldSelector;
};


export type FirstSpiritSectionGroupConnectionSumArgs = {
  field: FirstSpiritSectionFieldSelector;
};

export type FirstSpiritSectionSortInput = {
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritSectionSortInput>;
  children?: InputMaybe<NodeSortInput>;
  data?: InputMaybe<SortOrderEnum>;
  displayName?: InputMaybe<SortOrderEnum>;
  displayed?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  lifespan?: InputMaybe<FirstSpiritLifespanSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  page?: InputMaybe<FirstSpiritPageSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  previewId?: InputMaybe<SortOrderEnum>;
  section?: InputMaybe<FirstSpiritSectionSortInput>;
  sectionType?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritSeoRouteList = {
  __typename?: 'FirstSpiritSeoRouteList';
  route: Scalars['String']['output'];
};

export type FirstSpiritSeoRouteListFieldSelector = {
  route?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritSeoRouteListFilterInput = {
  route?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritSeoRouteListFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritSeoRouteListFilterInput>;
};

export type FirstSpiritSeoRouteListSortInput = {
  route?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritStructureItem = {
  __typename?: 'FirstSpiritStructureItem';
  fsStructureItemId: Scalars['String']['output'];
  navigationItem: FirstSpiritNavigationItem;
  structureChildren: Array<Maybe<FirstSpiritStructureItem>>;
};

export type FirstSpiritStructureItemFieldSelector = {
  fsStructureItemId?: InputMaybe<FieldSelectorEnum>;
  navigationItem?: InputMaybe<FirstSpiritNavigationItemFieldSelector>;
  structureChildren?: InputMaybe<FirstSpiritStructureItemFieldSelector>;
};

export type FirstSpiritStructureItemFilterInput = {
  fsStructureItemId?: InputMaybe<StringQueryOperatorInput>;
  navigationItem?: InputMaybe<FirstSpiritNavigationItemFilterInput>;
  structureChildren?: InputMaybe<FirstSpiritStructureItemFilterInput>;
};

export type FirstSpiritStructureItemFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritStructureItemFilterInput>;
};

export type FirstSpiritStructureItemSortInput = {
  fsStructureItemId?: InputMaybe<SortOrderEnum>;
  navigationItem?: InputMaybe<FirstSpiritNavigationItemSortInput>;
  structureChildren?: InputMaybe<FirstSpiritStructureItemSortInput>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']['output']>;
  contentDigest: Scalars['String']['output'];
  contentFilePath?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ignoreType?: Maybe<Scalars['Boolean']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']['input']>;
  glob?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  regex?: InputMaybe<Scalars['JSON']['input']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type NodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  itemCount: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  allFirstSpiritDataset: FirstSpiritDatasetConnection;
  allFirstSpiritGcaPage: FirstSpiritGcaPageConnection;
  allFirstSpiritNavigationData: FirstSpiritNavigationDataConnection;
  allFirstSpiritPage: FirstSpiritPageConnection;
  allFirstSpiritProjectProperties: FirstSpiritProjectPropertiesConnection;
  allFirstSpiritSection: FirstSpiritSectionConnection;
  firstSpiritDataset?: Maybe<FirstSpiritDataset>;
  firstSpiritGcaPage?: Maybe<FirstSpiritGcaPage>;
  firstSpiritNavigationData?: Maybe<FirstSpiritNavigationData>;
  firstSpiritPage?: Maybe<FirstSpiritPage>;
  firstSpiritProjectProperties?: Maybe<FirstSpiritProjectProperties>;
  firstSpiritSection?: Maybe<FirstSpiritSection>;
};


export type QueryAllFirstSpiritDatasetArgs = {
  filter?: InputMaybe<FirstSpiritDatasetFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FirstSpiritDatasetSortInput>>>;
};


export type QueryAllFirstSpiritGcaPageArgs = {
  filter?: InputMaybe<FirstSpiritGcaPageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FirstSpiritGcaPageSortInput>>>;
};


export type QueryAllFirstSpiritNavigationDataArgs = {
  filter?: InputMaybe<FirstSpiritNavigationDataFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FirstSpiritNavigationDataSortInput>>>;
};


export type QueryAllFirstSpiritPageArgs = {
  filter?: InputMaybe<FirstSpiritPageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FirstSpiritPageSortInput>>>;
};


export type QueryAllFirstSpiritProjectPropertiesArgs = {
  filter?: InputMaybe<FirstSpiritProjectPropertiesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FirstSpiritProjectPropertiesSortInput>>>;
};


export type QueryAllFirstSpiritSectionArgs = {
  filter?: InputMaybe<FirstSpiritSectionFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FirstSpiritSectionSortInput>>>;
};


export type QueryFirstSpiritDatasetArgs = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritDatasetFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  entityType?: InputMaybe<StringQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  route?: InputMaybe<StringQueryOperatorInput>;
  routes?: InputMaybe<FirstSpiritDatasetRouteFilterListInput>;
  schema?: InputMaybe<StringQueryOperatorInput>;
  sections?: InputMaybe<FirstSpiritSectionFilterListInput>;
  template?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryFirstSpiritGcaPageArgs = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritGcaPageFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryFirstSpiritNavigationDataArgs = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritNavigationDataFilterListInput>;
  changeInfo?: InputMaybe<FirstSpiritChangeInfoFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  idList?: InputMaybe<FirstSpiritNavigationItemFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<FirstSpiritMasterLocaleFilterInput>;
  meta?: InputMaybe<FirstSpiritMetaFilterInput>;
  pages?: InputMaybe<FirstSpiritPagesFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoRouteList?: InputMaybe<FirstSpiritSeoRouteListFilterListInput>;
  structure?: InputMaybe<FirstSpiritStructureItemFilterListInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryFirstSpiritPageArgs = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritPageFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<JsonQueryOperatorInput>;
  metaPageRefs?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  refId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  route?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryFirstSpiritProjectPropertiesArgs = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritProjectPropertiesFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  fsChildren?: InputMaybe<StringQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  masterLocale?: InputMaybe<FirstSpiritMasterLocaleFilterInput>;
  meta?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryFirstSpiritSectionArgs = {
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritSectionFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  displayed?: InputMaybe<BooleanQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lifespan?: InputMaybe<FirstSpiritLifespanFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<FirstSpiritPageFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  section?: InputMaybe<FirstSpiritSectionFilterListInput>;
  sectionType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type FooterQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type FooterQuery = { __typename?: 'Query', firstSpiritGcaPage?: { __typename?: 'FirstSpiritGcaPage', data: any } | null };

export type FsNavigationQueryQueryVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type FsNavigationQueryQuery = { __typename?: 'Query', firstSpiritNavigationData?: { __typename?: 'FirstSpiritNavigationData', structure: Array<{ __typename?: 'FirstSpiritStructureItem', navigationItem: { __typename?: 'FirstSpiritNavigationItem', label?: string | null, seoRoute?: string | null, fsNavItemId: string, page?: { __typename?: 'FirstSpiritPage', id: string } | null }, structureChildren: Array<{ __typename?: 'FirstSpiritStructureItem', navigationItem: { __typename?: 'FirstSpiritNavigationItem', label?: string | null, seoRoute?: string | null, fsNavItemId: string, page?: { __typename?: 'FirstSpiritPage', id: string } | null }, structureChildren: Array<{ __typename?: 'FirstSpiritStructureItem', navigationItem: { __typename?: 'FirstSpiritNavigationItem', fsNavItemId: string, label?: string | null, seoRoute?: string | null, page?: { __typename?: 'FirstSpiritPage', id: string } | null } } | null> } | null> } | null> } | null };

export type PageByRouteQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  route: Scalars['String']['input'];
}>;


export type PageByRouteQuery = { __typename?: 'Query', firstSpiritPage?: { __typename?: 'FirstSpiritPage', layout: string, name: string, id: string, pageBodies?: Array<{ __typename?: 'FirstSpiritPageBody', children?: Array<any | null> | null, name: string, previewId: string } | null> | null } | null };

export type ProductsQueryVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type ProductsQuery = { __typename?: 'Query', allFirstSpiritDataset: { __typename?: 'FirstSpiritDatasetConnection', nodes: Array<{ __typename?: 'FirstSpiritDataset', fsId: string, entityType: string, route: string, data: any }> } };

export type ProductDetailQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type ProductDetailQuery = { __typename?: 'Query', firstSpiritDataset?: { __typename?: 'FirstSpiritDataset', data: any } | null };

export type SectionQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type SectionQuery = { __typename?: 'Query', allFirstSpiritSection: { __typename?: 'FirstSpiritSectionConnection', nodes: Array<{ __typename?: 'FirstSpiritSection', data: any, name?: string | null, fsId: string }> } };


export const FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"footer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstSpiritGcaPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>;
export const FsNavigationQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fsNavigationQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstSpiritNavigationData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"structure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"seoRoute"}},{"kind":"Field","name":{"kind":"Name","value":"fsNavItemId"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"structureChildren"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"seoRoute"}},{"kind":"Field","name":{"kind":"Name","value":"fsNavItemId"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"structureChildren"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fsNavItemId"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"seoRoute"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FsNavigationQueryQuery, FsNavigationQueryQueryVariables>;
export const PageByRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pageByRoute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"route"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstSpiritPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"route"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"route"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pageBodies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewId"}}]}}]}}]}}]} as unknown as DocumentNode<PageByRouteQuery, PageByRouteQueryVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFirstSpiritDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"entityType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"product","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fsId"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"route"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const ProductDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstSpiritDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"fsId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<ProductDetailQuery, ProductDetailQueryVariables>;
export const SectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"section"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFirstSpiritSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fsId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fsId"}}]}}]}}]}}]} as unknown as DocumentNode<SectionQuery, SectionQueryVariables>;