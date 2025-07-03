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
  /** Netlify visual editor Color String type */
  Color: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** Netlify visual editor Html String type */
  Html: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** Netlify visual editor Markdown String type */
  Markdown: { input: any; output: any; }
  /** Netlify visual editor Slug String type */
  Slug: { input: any; output: any; }
  /** Netlify visual editor Text String type */
  Text: { input: any; output: any; }
  /** Netlify visual editor Url String type */
  Url: { input: any; output: any; }
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export enum Data_Layer_Authorization_Labels {
  Cma3xwpi10001jr09f3d5d1v4 = 'cma3xwpi10001jr09f3d5d1v4'
}

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

export type FirstSpiritAccordion = {
  __typename?: 'FirstSpiritAccordion';
  stAccordion?: Maybe<Array<Maybe<FirstSpiritSection>>>;
  stHeadline?: Maybe<Scalars['String']['output']>;
  stInfo?: Maybe<Scalars['JSON']['output']>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stSubline?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritAccordionItem = {
  __typename?: 'FirstSpiritAccordionItem';
  stContent?: Maybe<Scalars['JSON']['output']>;
  stTitle?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritAsset = Node & {
  __typename?: 'FirstSpiritAsset';
  _createdAt?: Maybe<Scalars['Date']['output']>;
  /** The original non-global ID from this data source */
  _objectId: Scalars['String']['output'];
  _updatedAt?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  contentType?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
  size?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type FirstSpiritAssetConnection = {
  __typename?: 'FirstSpiritAssetConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritAssetEdge>;
  group: Array<FirstSpiritAssetGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritAssetConnectionDistinctArgs = {
  field: FirstSpiritAssetFieldSelector;
};


export type FirstSpiritAssetConnectionGroupArgs = {
  field: FirstSpiritAssetFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritAssetConnectionMaxArgs = {
  field: FirstSpiritAssetFieldSelector;
};


export type FirstSpiritAssetConnectionMinArgs = {
  field: FirstSpiritAssetFieldSelector;
};


export type FirstSpiritAssetConnectionSumArgs = {
  field: FirstSpiritAssetFieldSelector;
};

export type FirstSpiritAssetEdge = {
  __typename?: 'FirstSpiritAssetEdge';
  next?: Maybe<FirstSpiritAsset>;
  node: FirstSpiritAsset;
  previous?: Maybe<FirstSpiritAsset>;
};

export type FirstSpiritAssetFieldSelector = {
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  contentType?: InputMaybe<FieldSelectorEnum>;
  fileName?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  size?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritAssetFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<StringQueryOperatorInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type FirstSpiritAssetGroupConnection = {
  __typename?: 'FirstSpiritAssetGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritAssetEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FirstSpiritAssetGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritAssetGroupConnectionDistinctArgs = {
  field: FirstSpiritAssetFieldSelector;
};


export type FirstSpiritAssetGroupConnectionGroupArgs = {
  field: FirstSpiritAssetFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritAssetGroupConnectionMaxArgs = {
  field: FirstSpiritAssetFieldSelector;
};


export type FirstSpiritAssetGroupConnectionMinArgs = {
  field: FirstSpiritAssetFieldSelector;
};


export type FirstSpiritAssetGroupConnectionSumArgs = {
  field: FirstSpiritAssetFieldSelector;
};

export type FirstSpiritAssetSortInput = {
  _createdAt?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  contentType?: InputMaybe<SortOrderEnum>;
  fileName?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  size?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritBasePageRef = {
  __typename?: 'FirstSpiritBasePageRef';
  identifier?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remoteProject?: Maybe<Scalars['String']['output']>;
  section?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  uidType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

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

export type FirstSpiritCircle = {
  __typename?: 'FirstSpiritCircle';
  areaType?: Maybe<FirstSpiritImageMapAreaType>;
  center: FirstSpiritPoint2D;
  link?: Maybe<FirstSpiritLink>;
  radius: Scalars['Int']['output'];
};

export type FirstSpiritContent2Section = {
  __typename?: 'FirstSpiritContent2Section';
  data: FirstSpiritContent2SectionData;
  fsReferences?: Maybe<Array<Maybe<FirstSpiritReference>>>;
  sectionType: Scalars['String']['output'];
};

export type FirstSpiritContent2SectionData = {
  __typename?: 'FirstSpiritContent2SectionData';
  entityType: Scalars['String']['output'];
  filterParams: Scalars['JSON']['output'];
  maxPageCount: Scalars['Int']['output'];
  ordering?: Maybe<Array<Maybe<FirstSpiritContent2SectionDataOrdering>>>;
  query?: Maybe<Scalars['String']['output']>;
  recordCountPerPage: Scalars['Int']['output'];
  schema: Scalars['String']['output'];
};

export type FirstSpiritContent2SectionDataOrdering = {
  __typename?: 'FirstSpiritContent2SectionDataOrdering';
  ascending: Scalars['Boolean']['output'];
  attribute: Scalars['String']['output'];
};

export type FirstSpiritDataset = Node & {
  __typename?: 'FirstSpiritDataset';
  _createdAt?: Maybe<Scalars['Date']['output']>;
  _locale?: Maybe<Scalars['String']['output']>;
  /** The original non-global ID from this data source */
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritDataset>>>;
  _updatedAt?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  data: FirstSpiritInlineDatasetUnionB50D929C;
  entityType: Scalars['String']['output'];
  fsId: Scalars['String']['output'];
  fsReferences?: Maybe<Array<Maybe<FirstSpiritReference>>>;
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
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritDatasetFieldSelector>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  entityType?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  fsReferences?: InputMaybe<FirstSpiritReferenceFieldSelector>;
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
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritDatasetFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  entityType?: InputMaybe<StringQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  fsReferences?: InputMaybe<FirstSpiritReferenceFilterListInput>;
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

export type FirstSpiritDatasetLink = {
  __typename?: 'FirstSpiritDatasetLink';
  ltDataset?: Maybe<FirstSpiritDataset>;
  ltText?: Maybe<Scalars['String']['output']>;
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
  _createdAt?: InputMaybe<SortOrderEnum>;
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritDatasetSortInput>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  entityType?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  fsReferences?: InputMaybe<FirstSpiritReferenceSortInput>;
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

export type FirstSpiritDatasetValue = {
  __typename?: 'FirstSpiritDatasetValue';
  value?: Maybe<FirstSpiritBasePageRef>;
};

export type FirstSpiritExternalLink = {
  __typename?: 'FirstSpiritExternalLink';
  ltLink?: Maybe<Scalars['String']['output']>;
  ltText?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritFeature = {
  __typename?: 'FirstSpiritFeature';
  stImage?: Maybe<FirstSpiritReferenceUnion>;
  stImageAltText?: Maybe<Scalars['String']['output']>;
  stLink?: Maybe<FirstSpiritLink>;
  stProduct?: Maybe<Scalars['JSON']['output']>;
  stText?: Maybe<Scalars['JSON']['output']>;
  stTitle?: Maybe<Scalars['String']['output']>;
  stType?: Maybe<FirstSpiritOption>;
};

export type FirstSpiritFeatures = {
  __typename?: 'FirstSpiritFeatures';
  stFeatures?: Maybe<Array<Maybe<FirstSpiritSection>>>;
  stHeadline?: Maybe<Scalars['String']['output']>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stText?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritFile = {
  __typename?: 'FirstSpiritFile';
  fileMetaData?: Maybe<FirstSpiritFileMetaData>;
  fileName?: Maybe<Scalars['String']['output']>;
  fsId?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<FirstSpiritMetadata>;
  previewId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritFileMetaData = {
  __typename?: 'FirstSpiritFileMetaData';
  encoding?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['Int']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritFscataloglinktest = {
  __typename?: 'FirstSpiritFscataloglinktest';
  stLinks?: Maybe<Array<Maybe<FirstSpiritSection>>>;
};

export type FirstSpiritFscatalogsectiontest = {
  __typename?: 'FirstSpiritFscatalogsectiontest';
  stCatalog?: Maybe<Array<Maybe<FirstSpiritSection>>>;
};

export type FirstSpiritFsdatasettest = {
  __typename?: 'FirstSpiritFsdatasettest';
  stProduct?: Maybe<FirstSpiritDataset>;
};

export type FirstSpiritFsindex = {
  __typename?: 'FirstSpiritFsindex';
  stIndex?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritFsrefeferencepage = {
  __typename?: 'FirstSpiritFsrefeferencepage';
  stPageref?: Maybe<FirstSpiritReferenceUnion>;
};

export type FirstSpiritFsreferencedataset = {
  __typename?: 'FirstSpiritFsreferencedataset';
  stPageref?: Maybe<FirstSpiritReferenceUnion>;
};

export type FirstSpiritFsreferencepicture = {
  __typename?: 'FirstSpiritFsreferencepicture';
  stPicture?: Maybe<FirstSpiritReferenceUnion>;
};

export type FirstSpiritFsreferencfile = {
  __typename?: 'FirstSpiritFsreferencfile';
  stFile?: Maybe<FirstSpiritReferenceUnion>;
};

export type FirstSpiritFtsGcaMapping = {
  __typename?: 'FirstSpiritFtsGcaMapping';
  ptFtsGenTaskPreviewCreator?: Maybe<Scalars['String']['output']>;
  ptFtsGenTaskQueue?: Maybe<Scalars['String']['output']>;
  ptFtsMappingsStandard?: Maybe<Array<Maybe<FirstSpiritSection>>>;
};

export type FirstSpiritFtsLanguageMapping = {
  __typename?: 'FirstSpiritFtsLanguageMapping';
  stFtsLanguageSource?: Maybe<FirstSpiritOption>;
  stFtsLanguageTarget?: Maybe<FirstSpiritOption>;
  stFtsTmsProject?: Maybe<FirstSpiritOption>;
};

export type FirstSpiritFtsMultiplePageEntry = {
  __typename?: 'FirstSpiritFtsMultiplePageEntry';
  stFtsPage?: Maybe<FirstSpiritReferenceUnion>;
};

export type FirstSpiritGcaFooter = {
  __typename?: 'FirstSpiritGcaFooter';
  gcCopyright?: Maybe<Scalars['JSON']['output']>;
  gcLinks?: Maybe<Array<Maybe<FirstSpiritSection>>>;
};

export type FirstSpiritGcaPage = Node & {
  __typename?: 'FirstSpiritGcaPage';
  _createdAt?: Maybe<Scalars['Date']['output']>;
  _locale?: Maybe<Scalars['String']['output']>;
  /** The original non-global ID from this data source */
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritGcaPage>>>;
  _updatedAt?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  data: FirstSpiritInlineGcaPageUnion22228A32;
  fsId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  layout: Scalars['String']['output'];
  meta: FirstSpiritMetadata;
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
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritGcaPageFieldSelector>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  layout?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<FirstSpiritMetadataFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFieldSelector>;
  previewId?: InputMaybe<FieldSelectorEnum>;
  remoteProjectId?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritGcaPageFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritGcaPageFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<FirstSpiritMetadataFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFilterListInput>;
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
  _createdAt?: InputMaybe<SortOrderEnum>;
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritGcaPageSortInput>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  layout?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<FirstSpiritMetadataSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  pageBodies?: InputMaybe<FirstSpiritPageBodySortInput>;
  previewId?: InputMaybe<SortOrderEnum>;
  remoteProjectId?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritGlobalTranslation = {
  __typename?: 'FirstSpiritGlobalTranslation';
  ttKey?: Maybe<Scalars['String']['output']>;
  ttTranslation?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritGoogleMaps = {
  __typename?: 'FirstSpiritGoogleMaps';
  stDataList?: Maybe<Array<Maybe<FirstSpiritSection>>>;
  stDataPage?: Maybe<FirstSpiritReferenceUnion>;
  stDatasource?: Maybe<FirstSpiritOption>;
  stHeadline?: Maybe<Scalars['String']['output']>;
  stInitialLat?: Maybe<Scalars['Float']['output']>;
  stInitialLong?: Maybe<Scalars['Float']['output']>;
  stInitialZoom?: Maybe<Scalars['Float']['output']>;
  stNumberOfLocations?: Maybe<Scalars['Float']['output']>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stSubheadline?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritHomepage = {
  __typename?: 'FirstSpiritHomepage';
  ptCreateSection: Scalars['JSON']['output'];
  ptCreateSectionDrop: Scalars['JSON']['output'];
  ptMdDescription?: Maybe<Scalars['String']['output']>;
  ptMdImage?: Maybe<FirstSpiritReferenceUnion>;
  ptMdImageAltText?: Maybe<Scalars['String']['output']>;
  ptMdKeywords?: Maybe<Scalars['String']['output']>;
  ptMdTitle?: Maybe<Scalars['String']['output']>;
  ptMdType?: Maybe<FirstSpiritOption>;
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

export type FirstSpiritImage = {
  __typename?: 'FirstSpiritImage';
  description?: Maybe<Scalars['String']['output']>;
  meta: FirstSpiritMetadata;
  previewId?: Maybe<Scalars['String']['output']>;
  remoteProjectId?: Maybe<Scalars['String']['output']>;
  resolutions?: Maybe<FirstSpiritResolution>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritImageMap = {
  __typename?: 'FirstSpiritImageMap';
  areas?: Maybe<Array<Maybe<FirstSpiritImageMapArea>>>;
  media?: Maybe<FirstSpiritImage>;
  type: Scalars['String']['output'];
};

export type FirstSpiritImageMapArea = FirstSpiritCircle | FirstSpiritPoly | FirstSpiritRect;

export enum FirstSpiritImageMapAreaType {
  /** cirlce */
  Circle = 'circle',
  /** poly */
  Poly = 'poly',
  /** rect */
  Rect = 'rect'
}

export type FirstSpiritInlineDatasetUnionB50D929C = FirstSpiritGlobalTranslation | FirstSpiritRequests | FirstSpiritSmartlivingAuthor | FirstSpiritSmartlivingCategory | FirstSpiritSmartlivingLocation | FirstSpiritSmartlivingNews | FirstSpiritSmartlivingProduct | FirstSpiritSmartlivingProductOverview | FirstSpiritSmartlivingTag | FirstSpiritTask;

export type FirstSpiritInlineGcaPageUnion22228A32 = FirstSpiritFtsGcaMapping | FirstSpiritGcaFooter | FirstSpiritHomepage | FirstSpiritLocationsJson | FirstSpiritMetadata | FirstSpiritMpp | FirstSpiritNewsJson | FirstSpiritProjectSettings | FirstSpiritRedirects | FirstSpiritStandard | FirstSpiritTranslationstudioConfiguration;

export type FirstSpiritInlinePageUnion8F4Ef8C0 = FirstSpiritFtsGcaMapping | FirstSpiritGcaFooter | FirstSpiritHomepage | FirstSpiritLocationsJson | FirstSpiritMetadata | FirstSpiritMpp | FirstSpiritNewsJson | FirstSpiritProjectSettings | FirstSpiritRedirects | FirstSpiritStandard | FirstSpiritTranslationstudioConfiguration;

export type FirstSpiritInlineSectionUnion638Da777 = FirstSpiritAccordion | FirstSpiritAccordionItem | FirstSpiritDatasetLink | FirstSpiritExternalLink | FirstSpiritFeature | FirstSpiritFeatures | FirstSpiritFscataloglinktest | FirstSpiritFscatalogsectiontest | FirstSpiritFsdatasettest | FirstSpiritFsindex | FirstSpiritFsrefeferencepage | FirstSpiritFsreferencedataset | FirstSpiritFsreferencepicture | FirstSpiritFsreferencfile | FirstSpiritFtsLanguageMapping | FirstSpiritFtsMultiplePageEntry | FirstSpiritGlobalTranslation | FirstSpiritGoogleMaps | FirstSpiritInteractiveImage | FirstSpiritInteractiveImageLink | FirstSpiritInternalLink | FirstSpiritLatestNews | FirstSpiritLocation | FirstSpiritMediaLink | FirstSpiritNewsOverview | FirstSpiritProductCategoryTeaser | FirstSpiritRedirect | FirstSpiritRequests | FirstSpiritSmartlivingAuthor | FirstSpiritSmartlivingCategory | FirstSpiritSmartlivingLocation | FirstSpiritSmartlivingNews | FirstSpiritSmartlivingProduct | FirstSpiritSmartlivingProductOverview | FirstSpiritSmartlivingTag | FirstSpiritStage | FirstSpiritSteps | FirstSpiritStepsItem | FirstSpiritTable | FirstSpiritTask | FirstSpiritTeaser | FirstSpiritTextImage;

export type FirstSpiritInlineUnionBc48473F = FirstSpiritDataset | FirstSpiritPage;

export type FirstSpiritInteractiveImage = {
  __typename?: 'FirstSpiritInteractiveImage';
  stHeadline?: Maybe<Scalars['String']['output']>;
  stImageAltText?: Maybe<Scalars['String']['output']>;
  stImagemap?: Maybe<FirstSpiritImageMap>;
  stLayout?: Maybe<FirstSpiritOption>;
  stStyle?: Maybe<FirstSpiritOption>;
  stText?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritInteractiveImageLink = {
  __typename?: 'FirstSpiritInteractiveImageLink';
  ltHeadline?: Maybe<Scalars['String']['output']>;
  ltImage?: Maybe<FirstSpiritReferenceUnion>;
  ltLink?: Maybe<FirstSpiritLink>;
  ltProduct?: Maybe<Scalars['JSON']['output']>;
  ltText?: Maybe<Scalars['JSON']['output']>;
  ltTooltip?: Maybe<Scalars['String']['output']>;
  ltType?: Maybe<FirstSpiritOption>;
};

export type FirstSpiritInternalLink = {
  __typename?: 'FirstSpiritInternalLink';
  ltLink?: Maybe<FirstSpiritReferenceUnion>;
  ltText?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritLatestNews = {
  __typename?: 'FirstSpiritLatestNews';
  stHeadline?: Maybe<Scalars['String']['output']>;
  stNewsTag?: Maybe<FirstSpiritOption>;
  stSubheadline?: Maybe<Scalars['JSON']['output']>;
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

export type FirstSpiritLink = {
  __typename?: 'FirstSpiritLink';
  data?: Maybe<FirstSpiritLinkUnion>;
  meta?: Maybe<FirstSpiritMetadata>;
  template: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritLinkFieldSelector = {
  meta?: InputMaybe<FirstSpiritMetadataFieldSelector>;
  template?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritLinkFilterInput = {
  meta?: InputMaybe<FirstSpiritMetadataFilterInput>;
  template?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritLinkSortInput = {
  meta?: InputMaybe<FirstSpiritMetadataSortInput>;
  template?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritLinkUnion = FirstSpiritDatasetLink | FirstSpiritExternalLink | FirstSpiritInteractiveImageLink | FirstSpiritInternalLink | FirstSpiritMediaLink;

export type FirstSpiritLocation = {
  __typename?: 'FirstSpiritLocation';
  stDescription?: Maybe<Scalars['JSON']['output']>;
  stLat?: Maybe<Scalars['Float']['output']>;
  stLong?: Maybe<Scalars['Float']['output']>;
  stName?: Maybe<Scalars['String']['output']>;
  stRouteLink?: Maybe<FirstSpiritLink>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
};

export type FirstSpiritLocationsJson = {
  __typename?: 'FirstSpiritLocationsJson';
  data?: Maybe<Scalars['JSON']['output']>;
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

export type FirstSpiritMediaLink = {
  __typename?: 'FirstSpiritMediaLink';
  ltLink?: Maybe<FirstSpiritReferenceUnion>;
  ltText?: Maybe<Scalars['String']['output']>;
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

export type FirstSpiritMetadata = {
  __typename?: 'FirstSpiritMetadata';
  fsaiFacesPayload?: Maybe<Scalars['String']['output']>;
  fsaiFocusPreference?: Maybe<Scalars['String']['output']>;
  fsaiObjectsPayload?: Maybe<Scalars['String']['output']>;
  fsaiTags?: Maybe<Scalars['String']['output']>;
  fsaiTextPayload?: Maybe<Scalars['String']['output']>;
  fsaiUnsafeContentPayload?: Maybe<Scalars['String']['output']>;
  mdFtsDoNotTranslateElement?: Maybe<Scalars['Boolean']['output']>;
  mdFtsExcludeFromTranslation?: Maybe<Array<Maybe<FirstSpiritOption>>>;
  mdFtsRefWorfklowOnImport?: Maybe<FirstSpiritReferenceUnion>;
  mdImageAltText?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritMetadataFieldSelector = {
  fsaiFacesPayload?: InputMaybe<FieldSelectorEnum>;
  fsaiFocusPreference?: InputMaybe<FieldSelectorEnum>;
  fsaiObjectsPayload?: InputMaybe<FieldSelectorEnum>;
  fsaiTags?: InputMaybe<FieldSelectorEnum>;
  fsaiTextPayload?: InputMaybe<FieldSelectorEnum>;
  fsaiUnsafeContentPayload?: InputMaybe<FieldSelectorEnum>;
  mdFtsDoNotTranslateElement?: InputMaybe<FieldSelectorEnum>;
  mdFtsExcludeFromTranslation?: InputMaybe<FirstSpiritOptionFieldSelector>;
  mdImageAltText?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritMetadataFilterInput = {
  fsaiFacesPayload?: InputMaybe<StringQueryOperatorInput>;
  fsaiFocusPreference?: InputMaybe<StringQueryOperatorInput>;
  fsaiObjectsPayload?: InputMaybe<StringQueryOperatorInput>;
  fsaiTags?: InputMaybe<StringQueryOperatorInput>;
  fsaiTextPayload?: InputMaybe<StringQueryOperatorInput>;
  fsaiUnsafeContentPayload?: InputMaybe<StringQueryOperatorInput>;
  mdFtsDoNotTranslateElement?: InputMaybe<BooleanQueryOperatorInput>;
  mdFtsExcludeFromTranslation?: InputMaybe<FirstSpiritOptionFilterListInput>;
  mdImageAltText?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritMetadataSortInput = {
  fsaiFacesPayload?: InputMaybe<SortOrderEnum>;
  fsaiFocusPreference?: InputMaybe<SortOrderEnum>;
  fsaiObjectsPayload?: InputMaybe<SortOrderEnum>;
  fsaiTags?: InputMaybe<SortOrderEnum>;
  fsaiTextPayload?: InputMaybe<SortOrderEnum>;
  fsaiUnsafeContentPayload?: InputMaybe<SortOrderEnum>;
  mdFtsDoNotTranslateElement?: InputMaybe<SortOrderEnum>;
  mdFtsExcludeFromTranslation?: InputMaybe<FirstSpiritOptionSortInput>;
  mdImageAltText?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritMpp = {
  __typename?: 'FirstSpiritMpp';
  data?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritNavigationData = Node & {
  __typename?: 'FirstSpiritNavigationData';
  _createdAt?: Maybe<Scalars['Date']['output']>;
  _locale?: Maybe<Scalars['String']['output']>;
  /** The original non-global ID from this data source */
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritNavigationData>>>;
  _updatedAt?: Maybe<Scalars['Date']['output']>;
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
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritNavigationDataFieldSelector>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
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
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritNavigationDataFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
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
  _createdAt?: InputMaybe<SortOrderEnum>;
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritNavigationDataSortInput>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
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
  permissions?: Maybe<FirstSpiritPermissions>;
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
  permissions?: InputMaybe<FirstSpiritPermissionsFieldSelector>;
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
  permissions?: InputMaybe<FirstSpiritPermissionsFilterInput>;
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
  permissions?: InputMaybe<FirstSpiritPermissionsSortInput>;
  seoRoute?: InputMaybe<SortOrderEnum>;
  seoRouteRegex?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritNewsJson = {
  __typename?: 'FirstSpiritNewsJson';
  data?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritNewsOverview = {
  __typename?: 'FirstSpiritNewsOverview';
  stDataPage?: Maybe<FirstSpiritReferenceUnion>;
  stHeadline?: Maybe<Scalars['String']['output']>;
  stNumberOfNews?: Maybe<Scalars['Float']['output']>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stSubheadline?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritOption = {
  __typename?: 'FirstSpiritOption';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritOptionFieldSelector = {
  key?: InputMaybe<FieldSelectorEnum>;
  value?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritOptionFilterInput = {
  key?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritOptionFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritOptionFilterInput>;
};

export type FirstSpiritOptionSortInput = {
  key?: InputMaybe<SortOrderEnum>;
  value?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritPage = Node & {
  __typename?: 'FirstSpiritPage';
  _createdAt?: Maybe<Scalars['Date']['output']>;
  _locale?: Maybe<Scalars['String']['output']>;
  /** The original non-global ID from this data source */
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritPage>>>;
  _updatedAt?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  data: FirstSpiritInlinePageUnion8F4Ef8C0;
  fsId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  layout: Scalars['String']['output'];
  meta: FirstSpiritMetadata;
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
  children?: Maybe<Array<FirstSpiritPageBodyContent>>;
  name: Scalars['String']['output'];
  previewId: Scalars['String']['output'];
};

export type FirstSpiritPageBodyContent = FirstSpiritContent2Section | FirstSpiritDataset | FirstSpiritSection;

export type FirstSpiritPageBodyFieldSelector = {
  name?: InputMaybe<FieldSelectorEnum>;
  previewId?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritPageBodyFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritPageBodyFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritPageBodyFilterInput>;
};

export type FirstSpiritPageBodySortInput = {
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
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritPageFieldSelector>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  layout?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<FirstSpiritMetadataFieldSelector>;
  metaPageRefs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFieldSelector>;
  previewId?: InputMaybe<FieldSelectorEnum>;
  refId?: InputMaybe<FieldSelectorEnum>;
  remoteProjectId?: InputMaybe<FieldSelectorEnum>;
  route?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritPageFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritPageFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<FirstSpiritMetadataFilterInput>;
  metaPageRefs?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFilterListInput>;
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

export type FirstSpiritPageRef = {
  __typename?: 'FirstSpiritPageRef';
  page?: Maybe<FirstSpiritPage>;
  referenceId?: Maybe<Scalars['String']['output']>;
  referenceType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritPageSortInput = {
  _createdAt?: InputMaybe<SortOrderEnum>;
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritPageSortInput>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  layout?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<FirstSpiritMetadataSortInput>;
  metaPageRefs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  pageBodies?: InputMaybe<FirstSpiritPageBodySortInput>;
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
  type?: Maybe<Scalars['String']['output']>;
  valueTest?: Maybe<Array<Maybe<FirstSpiritPermissionActivity>>>;
};

export type FirstSpiritPermissionActivity = {
  __typename?: 'FirstSpiritPermissionActivity';
  allowed?: Maybe<Array<Maybe<FirstSpiritPermissionGroup>>>;
  forbidden?: Maybe<Array<Maybe<FirstSpiritPermissionGroup>>>;
};

export type FirstSpiritPermissionGroup = {
  __typename?: 'FirstSpiritPermissionGroup';
  groupId?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritPermissions = {
  __typename?: 'FirstSpiritPermissions';
  allowed?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  denied?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FirstSpiritPermissionsFieldSelector = {
  allowed?: InputMaybe<FieldSelectorEnum>;
  denied?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritPermissionsFilterInput = {
  allowed?: InputMaybe<StringQueryOperatorInput>;
  denied?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritPermissionsSortInput = {
  allowed?: InputMaybe<SortOrderEnum>;
  denied?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritPoint2D = {
  __typename?: 'FirstSpiritPoint2D';
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
};

export type FirstSpiritPoly = {
  __typename?: 'FirstSpiritPoly';
  areaType?: Maybe<FirstSpiritImageMapAreaType>;
  link?: Maybe<FirstSpiritLink>;
  points?: Maybe<Array<FirstSpiritPoint2D>>;
};

export type FirstSpiritProductCategoryTeaser = {
  __typename?: 'FirstSpiritProductCategoryTeaser';
  stCategory?: Maybe<FirstSpiritOption>;
  stCategoryLink?: Maybe<FirstSpiritLink>;
  stHeadline?: Maybe<Scalars['String']['output']>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stText?: Maybe<Scalars['JSON']['output']>;
  stTextAlignment?: Maybe<FirstSpiritOption>;
};

export type FirstSpiritProjectProperties = Node & {
  __typename?: 'FirstSpiritProjectProperties';
  _createdAt?: Maybe<Scalars['Date']['output']>;
  _locale?: Maybe<Scalars['String']['output']>;
  /** The original non-global ID from this data source */
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritProjectProperties>>>;
  _updatedAt?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  data: FirstSpiritProjectSettings;
  fsChildren?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fsId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  layout: Scalars['String']['output'];
  masterLocale?: Maybe<FirstSpiritMasterLocale>;
  meta: FirstSpiritProjectSettings;
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
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritProjectPropertiesFieldSelector>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  data?: InputMaybe<FirstSpiritProjectSettingsFieldSelector>;
  fsChildren?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  layout?: InputMaybe<FieldSelectorEnum>;
  masterLocale?: InputMaybe<FirstSpiritMasterLocaleFieldSelector>;
  meta?: InputMaybe<FirstSpiritProjectSettingsFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  previewId?: InputMaybe<FieldSelectorEnum>;
  remoteProjectId?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritProjectPropertiesFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritProjectPropertiesFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<FirstSpiritProjectSettingsFilterInput>;
  fsChildren?: InputMaybe<StringQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  masterLocale?: InputMaybe<FirstSpiritMasterLocaleFilterInput>;
  meta?: InputMaybe<FirstSpiritProjectSettingsFilterInput>;
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
  _createdAt?: InputMaybe<SortOrderEnum>;
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritProjectPropertiesSortInput>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  data?: InputMaybe<FirstSpiritProjectSettingsSortInput>;
  fsChildren?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  layout?: InputMaybe<SortOrderEnum>;
  masterLocale?: InputMaybe<FirstSpiritMasterLocaleSortInput>;
  meta?: InputMaybe<FirstSpiritProjectSettingsSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  previewId?: InputMaybe<SortOrderEnum>;
  remoteProjectId?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritProjectSettings = {
  __typename?: 'FirstSpiritProjectSettings';
  psCssMode?: Maybe<FirstSpiritOption>;
  psFallbackImageStage?: Maybe<FirstSpiritReferenceUnion>;
  psFallbackImageStageAltText?: Maybe<Scalars['String']['output']>;
  psFavoritesCtaLink?: Maybe<FirstSpiritLink>;
  psGoogleMapsApiKey?: Maybe<Scalars['String']['output']>;
  psLinkColor?: Maybe<Scalars['String']['output']>;
  psLinkHoverColor?: Maybe<Scalars['String']['output']>;
  psLogo?: Maybe<FirstSpiritReferenceUnion>;
  psLogoAltText?: Maybe<Scalars['String']['output']>;
  psNewsDetailPage?: Maybe<FirstSpiritReferenceUnion>;
  psPrimaryColor?: Maybe<Scalars['String']['output']>;
  psProductDetailPage?: Maybe<FirstSpiritReferenceUnion>;
  psSearchEnabled?: Maybe<Scalars['Boolean']['output']>;
  psSecondaryColor?: Maybe<Scalars['String']['output']>;
  psStartpage?: Maybe<FirstSpiritReferenceUnion>;
  psToggleWishlist?: Maybe<Scalars['Boolean']['output']>;
};

export type FirstSpiritProjectSettingsFieldSelector = {
  psCssMode?: InputMaybe<FirstSpiritOptionFieldSelector>;
  psFallbackImageStageAltText?: InputMaybe<FieldSelectorEnum>;
  psFavoritesCtaLink?: InputMaybe<FirstSpiritLinkFieldSelector>;
  psGoogleMapsApiKey?: InputMaybe<FieldSelectorEnum>;
  psLinkColor?: InputMaybe<FieldSelectorEnum>;
  psLinkHoverColor?: InputMaybe<FieldSelectorEnum>;
  psLogoAltText?: InputMaybe<FieldSelectorEnum>;
  psPrimaryColor?: InputMaybe<FieldSelectorEnum>;
  psSearchEnabled?: InputMaybe<FieldSelectorEnum>;
  psSecondaryColor?: InputMaybe<FieldSelectorEnum>;
  psToggleWishlist?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritProjectSettingsFilterInput = {
  psCssMode?: InputMaybe<FirstSpiritOptionFilterInput>;
  psFallbackImageStageAltText?: InputMaybe<StringQueryOperatorInput>;
  psFavoritesCtaLink?: InputMaybe<FirstSpiritLinkFilterInput>;
  psGoogleMapsApiKey?: InputMaybe<StringQueryOperatorInput>;
  psLinkColor?: InputMaybe<StringQueryOperatorInput>;
  psLinkHoverColor?: InputMaybe<StringQueryOperatorInput>;
  psLogoAltText?: InputMaybe<StringQueryOperatorInput>;
  psPrimaryColor?: InputMaybe<StringQueryOperatorInput>;
  psSearchEnabled?: InputMaybe<BooleanQueryOperatorInput>;
  psSecondaryColor?: InputMaybe<StringQueryOperatorInput>;
  psToggleWishlist?: InputMaybe<BooleanQueryOperatorInput>;
};

export type FirstSpiritProjectSettingsSortInput = {
  psCssMode?: InputMaybe<FirstSpiritOptionSortInput>;
  psFallbackImageStageAltText?: InputMaybe<SortOrderEnum>;
  psFavoritesCtaLink?: InputMaybe<FirstSpiritLinkSortInput>;
  psGoogleMapsApiKey?: InputMaybe<SortOrderEnum>;
  psLinkColor?: InputMaybe<SortOrderEnum>;
  psLinkHoverColor?: InputMaybe<SortOrderEnum>;
  psLogoAltText?: InputMaybe<SortOrderEnum>;
  psPrimaryColor?: InputMaybe<SortOrderEnum>;
  psSearchEnabled?: InputMaybe<SortOrderEnum>;
  psSecondaryColor?: InputMaybe<SortOrderEnum>;
  psToggleWishlist?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritRect = {
  __typename?: 'FirstSpiritRect';
  areaType?: Maybe<FirstSpiritImageMapAreaType>;
  leftTop: FirstSpiritPoint2D;
  link?: Maybe<FirstSpiritLink>;
  rightBottom: FirstSpiritPoint2D;
};

export type FirstSpiritRedirect = {
  __typename?: 'FirstSpiritRedirect';
  stBrowserrequest?: Maybe<Scalars['String']['output']>;
  stCookie?: Maybe<Scalars['String']['output']>;
  stCountrycode?: Maybe<Array<Maybe<FirstSpiritOption>>>;
  stForced?: Maybe<Array<Maybe<FirstSpiritOption>>>;
  stLanguagecode?: Maybe<FirstSpiritOption>;
  stStatuscode?: Maybe<FirstSpiritOption>;
  stTargetLanguage?: Maybe<FirstSpiritOption>;
  stTargetUrl?: Maybe<FirstSpiritReferenceUnion>;
};

export type FirstSpiritRedirects = {
  __typename?: 'FirstSpiritRedirects';
  ptRedirects?: Maybe<Array<Maybe<FirstSpiritSection>>>;
};

export type FirstSpiritReference = {
  __typename?: 'FirstSpiritReference';
  ref?: Maybe<Array<FirstSpiritInlineUnionBc48473F>>;
  refKey: Scalars['String']['output'];
};

export type FirstSpiritReferenceFieldSelector = {
  refKey?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritReferenceFilterInput = {
  refKey?: InputMaybe<StringQueryOperatorInput>;
};

export type FirstSpiritReferenceFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritReferenceFilterInput>;
};

export type FirstSpiritReferenceSortInput = {
  refKey?: InputMaybe<SortOrderEnum>;
};

export type FirstSpiritReferenceUnion = FirstSpiritDatasetValue | FirstSpiritFile | FirstSpiritImage | FirstSpiritPageRef | FirstSpiritReference;

export type FirstSpiritRequests = {
  __typename?: 'FirstSpiritRequests';
  ttFtsTranslationRegular?: Maybe<Scalars['Boolean']['output']>;
  ttIsFragment?: Maybe<Scalars['Boolean']['output']>;
  ttKeepNontranslatables?: Maybe<Scalars['Boolean']['output']>;
  ttProjectId?: Maybe<Scalars['Float']['output']>;
  ttRefMapping?: Maybe<FirstSpiritReferenceUnion>;
  ttRequestUid?: Maybe<Scalars['String']['output']>;
  ttTargetContent2Id?: Maybe<Scalars['String']['output']>;
  ttTargetPageId?: Maybe<Scalars['Float']['output']>;
  ttTargetSchemaUid?: Maybe<Scalars['String']['output']>;
  ttTargetTranslatablePage?: Maybe<FirstSpiritReferenceUnion>;
  ttTargetTranslateIds?: Maybe<Scalars['String']['output']>;
  ttTmsOverwrite?: Maybe<Scalars['String']['output']>;
  ttTranslateCompletedDate?: Maybe<Scalars['Date']['output']>;
  ttTranslateExpectedCompletionDate?: Maybe<Scalars['Date']['output']>;
  ttTranslateJob?: Maybe<Scalars['String']['output']>;
  ttTranslateNotification?: Maybe<Scalars['String']['output']>;
  ttTranslatePageForm?: Maybe<Scalars['Boolean']['output']>;
  ttTranslateRegisterUser?: Maybe<Scalars['String']['output']>;
  ttTranslateWorkflowOnImportId?: Maybe<Scalars['String']['output']>;
  ttWordCount?: Maybe<Scalars['Float']['output']>;
};

export type FirstSpiritResolution = {
  __typename?: 'FirstSpiritResolution';
  logo?: Maybe<FirstSpiritResolutionProps>;
  original?: Maybe<FirstSpiritResolutionProps>;
  res4X3M?: Maybe<FirstSpiritResolutionProps>;
  res4X3S?: Maybe<FirstSpiritResolutionProps>;
  res9X16M?: Maybe<FirstSpiritResolutionProps>;
  res16X4L?: Maybe<FirstSpiritResolutionProps>;
  res16X4M?: Maybe<FirstSpiritResolutionProps>;
  res16X6L?: Maybe<FirstSpiritResolutionProps>;
  res16X6M?: Maybe<FirstSpiritResolutionProps>;
  res16X6Xl?: Maybe<FirstSpiritResolutionProps>;
  res16X9L?: Maybe<FirstSpiritResolutionProps>;
  res16X9M?: Maybe<FirstSpiritResolutionProps>;
  res16X9S?: Maybe<FirstSpiritResolutionProps>;
};

export type FirstSpiritResolutionProps = {
  __typename?: 'FirstSpiritResolutionProps';
  extension: Scalars['String']['output'];
  fileSize: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  mimeType: Scalars['String']['output'];
  seoRoute: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type FirstSpiritScheduledAction = Node & {
  __typename?: 'FirstSpiritScheduledAction';
  _createdAt?: Maybe<Scalars['Date']['output']>;
  /** The original non-global ID from this data source */
  _objectId: Scalars['String']['output'];
  _updatedAt?: Maybe<Scalars['Date']['output']>;
  action: FirstSpiritScheduledActionAction;
  children: Array<Node>;
  documentIds?: Maybe<Array<Scalars['String']['output']>>;
  executeAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  name: Scalars['String']['output'];
  parent?: Maybe<Node>;
  state: FirstSpiritScheduledActionState;
};

export enum FirstSpiritScheduledActionAction {
  /** publish */
  Publish = 'publish',
  /** unpublish */
  Unpublish = 'unpublish'
}

export type FirstSpiritScheduledActionActionQueryOperatorInput = {
  eq?: InputMaybe<FirstSpiritScheduledActionAction>;
  in?: InputMaybe<Array<InputMaybe<FirstSpiritScheduledActionAction>>>;
  ne?: InputMaybe<FirstSpiritScheduledActionAction>;
  nin?: InputMaybe<Array<InputMaybe<FirstSpiritScheduledActionAction>>>;
};

export type FirstSpiritScheduledActionConnection = {
  __typename?: 'FirstSpiritScheduledActionConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritScheduledActionEdge>;
  group: Array<FirstSpiritScheduledActionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritScheduledAction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritScheduledActionConnectionDistinctArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
};


export type FirstSpiritScheduledActionConnectionGroupArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritScheduledActionConnectionMaxArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
};


export type FirstSpiritScheduledActionConnectionMinArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
};


export type FirstSpiritScheduledActionConnectionSumArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
};

export type FirstSpiritScheduledActionEdge = {
  __typename?: 'FirstSpiritScheduledActionEdge';
  next?: Maybe<FirstSpiritScheduledAction>;
  node: FirstSpiritScheduledAction;
  previous?: Maybe<FirstSpiritScheduledAction>;
};

export type FirstSpiritScheduledActionFieldSelector = {
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  action?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  documentIds?: InputMaybe<FieldSelectorEnum>;
  executeAt?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  state?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritScheduledActionFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  action?: InputMaybe<FirstSpiritScheduledActionActionQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  documentIds?: InputMaybe<StringQueryOperatorInput>;
  executeAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  state?: InputMaybe<FirstSpiritScheduledActionStateQueryOperatorInput>;
};

export type FirstSpiritScheduledActionGroupConnection = {
  __typename?: 'FirstSpiritScheduledActionGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FirstSpiritScheduledActionEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FirstSpiritScheduledActionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<FirstSpiritScheduledAction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FirstSpiritScheduledActionGroupConnectionDistinctArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
};


export type FirstSpiritScheduledActionGroupConnectionGroupArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FirstSpiritScheduledActionGroupConnectionMaxArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
};


export type FirstSpiritScheduledActionGroupConnectionMinArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
};


export type FirstSpiritScheduledActionGroupConnectionSumArgs = {
  field: FirstSpiritScheduledActionFieldSelector;
};

export type FirstSpiritScheduledActionSortInput = {
  _createdAt?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  action?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  documentIds?: InputMaybe<SortOrderEnum>;
  executeAt?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  state?: InputMaybe<SortOrderEnum>;
};

export enum FirstSpiritScheduledActionState {
  /** cancelled */
  Cancelled = 'cancelled',
  /** executing */
  Executing = 'executing',
  /** failed */
  Failed = 'failed',
  /** scheduled */
  Scheduled = 'scheduled',
  /** succeeded */
  Succeeded = 'succeeded'
}

export type FirstSpiritScheduledActionStateQueryOperatorInput = {
  eq?: InputMaybe<FirstSpiritScheduledActionState>;
  in?: InputMaybe<Array<InputMaybe<FirstSpiritScheduledActionState>>>;
  ne?: InputMaybe<FirstSpiritScheduledActionState>;
  nin?: InputMaybe<Array<InputMaybe<FirstSpiritScheduledActionState>>>;
};

export type FirstSpiritSection = Node & {
  __typename?: 'FirstSpiritSection';
  _createdAt?: Maybe<Scalars['Date']['output']>;
  _locale?: Maybe<Scalars['String']['output']>;
  /** The original non-global ID from this data source */
  _objectId: Scalars['String']['output'];
  _translations?: Maybe<Array<Maybe<FirstSpiritSection>>>;
  _updatedAt?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  data: FirstSpiritInlineSectionUnion638Da777;
  displayName?: Maybe<Scalars['String']['output']>;
  displayed?: Maybe<Scalars['Boolean']['output']>;
  fsId: Scalars['String']['output'];
  fsReferences?: Maybe<Array<Maybe<FirstSpiritReference>>>;
  gcaPage?: Maybe<FirstSpiritGcaPage>;
  id: Scalars['ID']['output'];
  internal: Internal;
  lifespan?: Maybe<FirstSpiritLifespan>;
  name?: Maybe<Scalars['String']['output']>;
  page?: Maybe<FirstSpiritPage>;
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
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _locale?: InputMaybe<FieldSelectorEnum>;
  _objectId?: InputMaybe<FieldSelectorEnum>;
  _translations?: InputMaybe<FirstSpiritSectionFieldSelector>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  displayName?: InputMaybe<FieldSelectorEnum>;
  displayed?: InputMaybe<FieldSelectorEnum>;
  fsId?: InputMaybe<FieldSelectorEnum>;
  fsReferences?: InputMaybe<FirstSpiritReferenceFieldSelector>;
  gcaPage?: InputMaybe<FirstSpiritGcaPageFieldSelector>;
  lifespan?: InputMaybe<FirstSpiritLifespanFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  page?: InputMaybe<FirstSpiritPageFieldSelector>;
  previewId?: InputMaybe<FieldSelectorEnum>;
  section?: InputMaybe<FirstSpiritSectionFieldSelector>;
  sectionType?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type FirstSpiritSectionFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritSectionFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  displayed?: InputMaybe<BooleanQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  fsReferences?: InputMaybe<FirstSpiritReferenceFilterListInput>;
  gcaPage?: InputMaybe<FirstSpiritGcaPageFilterInput>;
  lifespan?: InputMaybe<FirstSpiritLifespanFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<FirstSpiritPageFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  section?: InputMaybe<FirstSpiritSectionFilterListInput>;
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
  _createdAt?: InputMaybe<SortOrderEnum>;
  _locale?: InputMaybe<SortOrderEnum>;
  _objectId?: InputMaybe<SortOrderEnum>;
  _translations?: InputMaybe<FirstSpiritSectionSortInput>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  displayName?: InputMaybe<SortOrderEnum>;
  displayed?: InputMaybe<SortOrderEnum>;
  fsId?: InputMaybe<SortOrderEnum>;
  fsReferences?: InputMaybe<FirstSpiritReferenceSortInput>;
  gcaPage?: InputMaybe<FirstSpiritGcaPageSortInput>;
  lifespan?: InputMaybe<FirstSpiritLifespanSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  page?: InputMaybe<FirstSpiritPageSortInput>;
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

export type FirstSpiritSmartlivingAuthor = {
  __typename?: 'FirstSpiritSmartlivingAuthor';
  ttImage?: Maybe<FirstSpiritReferenceUnion>;
  ttImageAltText?: Maybe<Scalars['String']['output']>;
  ttName?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritSmartlivingCategory = {
  __typename?: 'FirstSpiritSmartlivingCategory';
  ttName?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritSmartlivingLocation = {
  __typename?: 'FirstSpiritSmartlivingLocation';
  ttDescription?: Maybe<Scalars['JSON']['output']>;
  ttLat?: Maybe<Scalars['Float']['output']>;
  ttLong?: Maybe<Scalars['Float']['output']>;
  ttName?: Maybe<Scalars['String']['output']>;
  ttRouteLink?: Maybe<FirstSpiritLink>;
};

export type FirstSpiritSmartlivingNews = {
  __typename?: 'FirstSpiritSmartlivingNews';
  ttArticleText?: Maybe<Scalars['JSON']['output']>;
  ttAuthor?: Maybe<Scalars['JSON']['output']>;
  ttContent?: Maybe<Array<Maybe<FirstSpiritSection>>>;
  ttDate?: Maybe<Scalars['Date']['output']>;
  ttDistribution?: Maybe<Array<Maybe<FirstSpiritOption>>>;
  ttHeadline?: Maybe<Scalars['String']['output']>;
  ttImage?: Maybe<FirstSpiritReferenceUnion>;
  ttImageAltText?: Maybe<Scalars['String']['output']>;
  ttSubheadline?: Maybe<Scalars['String']['output']>;
  ttTags?: Maybe<Scalars['JSON']['output']>;
  ttTeaserText?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritSmartlivingProduct = {
  __typename?: 'FirstSpiritSmartlivingProduct';
  ttCategories?: Maybe<Scalars['JSON']['output']>;
  ttDescription?: Maybe<Scalars['JSON']['output']>;
  ttImage?: Maybe<FirstSpiritReferenceUnion>;
  ttImageAltText?: Maybe<Scalars['String']['output']>;
  ttName?: Maybe<Scalars['String']['output']>;
  ttPrice?: Maybe<Scalars['String']['output']>;
  ttTeaserText?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritSmartlivingProductOverview = {
  __typename?: 'FirstSpiritSmartlivingProductOverview';
  data?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritSmartlivingTag = {
  __typename?: 'FirstSpiritSmartlivingTag';
  ttName?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritStage = {
  __typename?: 'FirstSpiritStage';
  stCta?: Maybe<FirstSpiritLink>;
  stHeadline?: Maybe<Scalars['String']['output']>;
  stImage?: Maybe<FirstSpiritReferenceUnion>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stSubheadline?: Maybe<Scalars['String']['output']>;
};

export type FirstSpiritStandard = {
  __typename?: 'FirstSpiritStandard';
  ptBgOpacity?: Maybe<FirstSpiritOption>;
  ptCreateSection: Scalars['JSON']['output'];
  ptCreateSectionDrop: Scalars['JSON']['output'];
  ptHeadline?: Maybe<Scalars['String']['output']>;
  ptImage?: Maybe<FirstSpiritReferenceUnion>;
  ptMdDescription?: Maybe<Scalars['String']['output']>;
  ptMdImage?: Maybe<FirstSpiritReferenceUnion>;
  ptMdImageAltText?: Maybe<Scalars['String']['output']>;
  ptMdKeywords?: Maybe<Scalars['String']['output']>;
  ptMdTitle?: Maybe<Scalars['String']['output']>;
  ptMdType?: Maybe<FirstSpiritOption>;
  ptNavigationDescription?: Maybe<Scalars['String']['output']>;
  ptSubheadline?: Maybe<Scalars['String']['output']>;
};

export enum FirstSpiritStatusEnum {
  /** added */
  Added = 'added',
  /** modified */
  Modified = 'modified',
  /** published */
  Published = 'published'
}

export type FirstSpiritSteps = {
  __typename?: 'FirstSpiritSteps';
  stHeadline?: Maybe<Scalars['String']['output']>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stSteps?: Maybe<Array<Maybe<FirstSpiritSection>>>;
  stSubline?: Maybe<Scalars['String']['output']>;
  stText?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritStepsItem = {
  __typename?: 'FirstSpiritStepsItem';
  stText?: Maybe<Scalars['JSON']['output']>;
  stTitle?: Maybe<Scalars['String']['output']>;
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
  structureChildren?: InputMaybe<FirstSpiritStructureItemFilterListInput>;
};

export type FirstSpiritStructureItemFilterListInput = {
  elemMatch?: InputMaybe<FirstSpiritStructureItemFilterInput>;
};

export type FirstSpiritStructureItemSortInput = {
  fsStructureItemId?: InputMaybe<SortOrderEnum>;
  navigationItem?: InputMaybe<FirstSpiritNavigationItemSortInput>;
  structureChildren?: InputMaybe<FirstSpiritStructureItemSortInput>;
};

export type FirstSpiritTable = {
  __typename?: 'FirstSpiritTable';
  stHeadline?: Maybe<Scalars['String']['output']>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stTable?: Maybe<Scalars['JSON']['output']>;
  stText?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritTask = {
  __typename?: 'FirstSpiritTask';
  ttContent2Id?: Maybe<Scalars['Float']['output']>;
  ttCreatePreview?: Maybe<Scalars['Boolean']['output']>;
  ttDatasetId?: Maybe<Scalars['Float']['output']>;
  ttProjectId?: Maybe<Scalars['Float']['output']>;
};

export type FirstSpiritTeaser = {
  __typename?: 'FirstSpiritTeaser';
  stCta?: Maybe<FirstSpiritLink>;
  stDesign?: Maybe<FirstSpiritOption>;
  stHeadline?: Maybe<Scalars['String']['output']>;
  stImage?: Maybe<FirstSpiritReferenceUnion>;
  stImageAltText?: Maybe<Scalars['String']['output']>;
  stLayout?: Maybe<FirstSpiritOption>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stText?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritTemplate = {
  __typename?: 'FirstSpiritTemplate';
  displayName: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  uidType: Scalars['String']['output'];
};

export type FirstSpiritTextImage = {
  __typename?: 'FirstSpiritTextImage';
  stColumns?: Maybe<FirstSpiritOption>;
  stHeadline?: Maybe<Scalars['String']['output']>;
  stImage?: Maybe<FirstSpiritReferenceUnion>;
  stImageAltText?: Maybe<Scalars['String']['output']>;
  stLayout?: Maybe<FirstSpiritOption>;
  stSectionLifespanFrom?: Maybe<Scalars['Date']['output']>;
  stSectionLifespanTo?: Maybe<Scalars['Date']['output']>;
  stSubheadline?: Maybe<Scalars['JSON']['output']>;
  stText?: Maybe<Scalars['JSON']['output']>;
};

export type FirstSpiritTranslationstudioConfiguration = {
  __typename?: 'FirstSpiritTranslationstudioConfiguration';
  ptDefaultCreatePreviewPage?: Maybe<FirstSpiritOption>;
  ptHideStCreatePreviewPage?: Maybe<Scalars['Boolean']['output']>;
  ptHideStFtsDateComplete?: Maybe<Scalars['Boolean']['output']>;
  ptHideStFtsRefWorfklowOnImport?: Maybe<Scalars['Boolean']['output']>;
  ptHideStFtsTranslationRegular?: Maybe<Scalars['Boolean']['output']>;
  ptHideStKeepNontranslatables?: Maybe<Scalars['Boolean']['output']>;
  ptLabelInputStFtsDateComplete?: Maybe<Scalars['String']['output']>;
  ptLabelInputStFtsRefMappings?: Maybe<Scalars['String']['output']>;
  ptLabelInputStFtsRefWorfklowOnImport?: Maybe<Scalars['String']['output']>;
  ptLabelInputStFtsTranslatePageForm?: Maybe<Scalars['String']['output']>;
  ptLabelInputStFtsTranslationRegular?: Maybe<Scalars['String']['output']>;
  ptLabelInputStKeepNontranslatables?: Maybe<Scalars['String']['output']>;
  ptLabelOptionOffStFtsTranslationRegular?: Maybe<Scalars['String']['output']>;
  ptLabelOptionOnStFtsTranslationRegular?: Maybe<Scalars['String']['output']>;
  ptLabelSubmitRequestTranslation?: Maybe<Scalars['String']['output']>;
  ptLabelTabDsgvo?: Maybe<Scalars['String']['output']>;
  ptLabelTabTranslationsettings?: Maybe<Scalars['String']['output']>;
  ptRequireStFtsDateComplete?: Maybe<Scalars['Boolean']['output']>;
  ptShowTmsOverwrite?: Maybe<Scalars['Boolean']['output']>;
  ptTextIgnoreContent2Fieldnames?: Maybe<Scalars['String']['output']>;
  ptToggleCountWordsLanguage?: Maybe<FirstSpiritOption>;
  ptToggleCountWordsPage?: Maybe<Scalars['Boolean']['output']>;
  ptToggleSkipValidation?: Maybe<Scalars['Boolean']['output']>;
  ptTranslationstudioHideMetrics?: Maybe<Scalars['Boolean']['output']>;
  ptTranslationstudioHideReportTms?: Maybe<Scalars['Boolean']['output']>;
  ptUseCmsInputList?: Maybe<Scalars['Boolean']['output']>;
  ptWidthStFtsRefMappings?: Maybe<Scalars['Float']['output']>;
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
  children?: InputMaybe<NodeFilterListInput>;
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
  allFirstSpiritAsset: FirstSpiritAssetConnection;
  allFirstSpiritDataset: FirstSpiritDatasetConnection;
  allFirstSpiritGcaPage: FirstSpiritGcaPageConnection;
  allFirstSpiritNavigationData: FirstSpiritNavigationDataConnection;
  allFirstSpiritPage: FirstSpiritPageConnection;
  allFirstSpiritProjectProperties: FirstSpiritProjectPropertiesConnection;
  allFirstSpiritScheduledAction: FirstSpiritScheduledActionConnection;
  allFirstSpiritSection: FirstSpiritSectionConnection;
  firstSpiritAsset?: Maybe<FirstSpiritAsset>;
  firstSpiritDataset?: Maybe<FirstSpiritDataset>;
  firstSpiritGcaPage?: Maybe<FirstSpiritGcaPage>;
  firstSpiritNavigationData?: Maybe<FirstSpiritNavigationData>;
  firstSpiritPage?: Maybe<FirstSpiritPage>;
  firstSpiritProjectProperties?: Maybe<FirstSpiritProjectProperties>;
  firstSpiritScheduledAction?: Maybe<FirstSpiritScheduledAction>;
  firstSpiritSection?: Maybe<FirstSpiritSection>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
};


export type QueryAllFirstSpiritAssetArgs = {
  filter?: InputMaybe<FirstSpiritAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FirstSpiritAssetSortInput>>>;
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


export type QueryAllFirstSpiritScheduledActionArgs = {
  filter?: InputMaybe<FirstSpiritScheduledActionFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FirstSpiritScheduledActionSortInput>>>;
};


export type QueryAllFirstSpiritSectionArgs = {
  filter?: InputMaybe<FirstSpiritSectionFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FirstSpiritSectionSortInput>>>;
};


export type QueryFirstSpiritAssetArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<StringQueryOperatorInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFirstSpiritDatasetArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritDatasetFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  entityType?: InputMaybe<StringQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  fsReferences?: InputMaybe<FirstSpiritReferenceFilterListInput>;
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
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritGcaPageFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<FirstSpiritMetadataFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFilterListInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryFirstSpiritNavigationDataArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritNavigationDataFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
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
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritPageFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<FirstSpiritMetadataFilterInput>;
  metaPageRefs?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  pageBodies?: InputMaybe<FirstSpiritPageBodyFilterListInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  refId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  route?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryFirstSpiritProjectPropertiesArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritProjectPropertiesFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<FirstSpiritProjectSettingsFilterInput>;
  fsChildren?: InputMaybe<StringQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  masterLocale?: InputMaybe<FirstSpiritMasterLocaleFilterInput>;
  meta?: InputMaybe<FirstSpiritProjectSettingsFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  remoteProjectId?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryFirstSpiritScheduledActionArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  action?: InputMaybe<FirstSpiritScheduledActionActionQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  documentIds?: InputMaybe<StringQueryOperatorInput>;
  executeAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  state?: InputMaybe<FirstSpiritScheduledActionStateQueryOperatorInput>;
};


export type QueryFirstSpiritSectionArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _locale?: InputMaybe<StringQueryOperatorInput>;
  _objectId?: InputMaybe<StringQueryOperatorInput>;
  _translations?: InputMaybe<FirstSpiritSectionFilterListInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  displayed?: InputMaybe<BooleanQueryOperatorInput>;
  fsId?: InputMaybe<StringQueryOperatorInput>;
  fsReferences?: InputMaybe<FirstSpiritReferenceFilterListInput>;
  gcaPage?: InputMaybe<FirstSpiritGcaPageFilterInput>;
  lifespan?: InputMaybe<FirstSpiritLifespanFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<FirstSpiritPageFilterInput>;
  previewId?: InputMaybe<StringQueryOperatorInput>;
  section?: InputMaybe<FirstSpiritSectionFilterListInput>;
  sectionType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  children: Array<Node>;
  host?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
  polyfill?: Maybe<Scalars['Boolean']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  name?: Maybe<Scalars['String']['output']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  packageJson?: Maybe<SitePluginPackageJson>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']['output']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  resolve?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  author?: Maybe<Scalars['String']['output']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  description?: Maybe<Scalars['String']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  main?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  apikey?: Maybe<Scalars['String']['output']>;
  caasURL?: Maybe<Scalars['String']['output']>;
  contentMode?: Maybe<Scalars['String']['output']>;
  instanceID?: Maybe<Scalars['String']['output']>;
  logLevel?: Maybe<Scalars['String']['output']>;
  navigationServiceURL?: Maybe<Scalars['String']['output']>;
  netlifyConfigKey?: Maybe<Scalars['String']['output']>;
  projectID?: Maybe<Scalars['String']['output']>;
  tenantID?: Maybe<Scalars['String']['output']>;
  typePrefix?: Maybe<Scalars['String']['output']>;
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

export type DatasetsByTypeQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type DatasetsByTypeQuery = { __typename?: 'Query', allFirstSpiritDataset: { __typename?: 'FirstSpiritDatasetConnection', nodes: Array<{ __typename?: 'FirstSpiritDataset', id: string, entityType: string, route: string, data: { __typename: 'FirstSpiritGlobalTranslation' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | (
        { __typename: 'FirstSpiritSmartlivingLocation' }
        & { ' $fragmentRefs'?: { 'FirstSpiritSmartLivingLocationFragmentFragment': FirstSpiritSmartLivingLocationFragmentFragment } }
      ) | (
        { __typename: 'FirstSpiritSmartlivingNews' }
        & { ' $fragmentRefs'?: { 'FirstSpiritSmartLivingNewsFragmentFragment': FirstSpiritSmartLivingNewsFragmentFragment } }
      ) | { __typename: 'FirstSpiritSmartlivingProduct' } | { __typename: 'FirstSpiritSmartlivingProductOverview' } | { __typename: 'FirstSpiritSmartlivingTag' } | { __typename: 'FirstSpiritTask' } }> } };

export type FirstSpiritTeaserFragmentFragment = { __typename?: 'FirstSpiritTeaser', stHeadline?: string | null, stText?: any | null, stImageAltText?: string | null, stImage?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage', resolutions?: { __typename?: 'FirstSpiritResolution', original?: { __typename?: 'FirstSpiritResolutionProps', url: string } | null } | null } | { __typename: 'FirstSpiritPageRef' } | { __typename: 'FirstSpiritReference' } | null, stLayout?: { __typename?: 'FirstSpiritOption', key?: string | null, value?: string | null } | null } & { ' $fragmentName'?: 'FirstSpiritTeaserFragmentFragment' };

export type FirstSpiritStageFragmentFragment = { __typename?: 'FirstSpiritStage', stHeadline?: string | null, stSubHeadlineTextImageStage?: string | null, stImage?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage', resolutions?: { __typename?: 'FirstSpiritResolution', original?: { __typename?: 'FirstSpiritResolutionProps', url: string } | null } | null } | { __typename: 'FirstSpiritPageRef' } | { __typename: 'FirstSpiritReference' } | null, stCta?: { __typename?: 'FirstSpiritLink', data?: { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink', ltText?: string | null, ltLink?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage' } | { __typename: 'FirstSpiritPageRef', page?: { __typename?: 'FirstSpiritPage', route?: string | null } | null } | { __typename: 'FirstSpiritReference' } | null } | { __typename: 'FirstSpiritMediaLink' } | null } | null } & { ' $fragmentName'?: 'FirstSpiritStageFragmentFragment' };

export type FirstSpiritTextImageFragmentFragment = { __typename?: 'FirstSpiritTextImage', stHeadline?: string | null, stText?: any | null, stSubHeadlineTextImage?: any | null, stColumns?: { __typename?: 'FirstSpiritOption', key?: string | null } | null, stLayout?: { __typename?: 'FirstSpiritOption', key?: string | null } | null, stImage?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage', resolutions?: { __typename?: 'FirstSpiritResolution', original?: { __typename?: 'FirstSpiritResolutionProps', url: string } | null } | null } | { __typename: 'FirstSpiritPageRef' } | { __typename: 'FirstSpiritReference' } | null } & { ' $fragmentName'?: 'FirstSpiritTextImageFragmentFragment' };

export type FirstSpiritProductCategoryTeaserFragmentFragment = { __typename?: 'FirstSpiritProductCategoryTeaser', stHeadline?: string | null, stText?: any | null, stTextAlignment?: { __typename?: 'FirstSpiritOption', key?: string | null } | null, stCategoryLink?: { __typename?: 'FirstSpiritLink', data?: { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink', ltText?: string | null, ltLink?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage' } | { __typename: 'FirstSpiritPageRef', page?: { __typename?: 'FirstSpiritPage', route?: string | null } | null } | { __typename: 'FirstSpiritReference' } | null } | { __typename: 'FirstSpiritMediaLink' } | null } | null, stCategory?: { __typename?: 'FirstSpiritOption', value?: string | null, key?: string | null } | null } & { ' $fragmentName'?: 'FirstSpiritProductCategoryTeaserFragmentFragment' };

export type FirstSpiritStepsFragmentFragment = { __typename?: 'FirstSpiritSteps', stHeadline?: string | null, stSubline?: string | null, stText?: any | null, stSteps?: Array<{ __typename: 'FirstSpiritSection', data: { __typename: 'FirstSpiritAccordion' } | { __typename: 'FirstSpiritAccordionItem' } | { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritFeature' } | { __typename: 'FirstSpiritFeatures' } | { __typename: 'FirstSpiritFscataloglinktest' } | { __typename: 'FirstSpiritFscatalogsectiontest' } | { __typename: 'FirstSpiritFsdatasettest' } | { __typename: 'FirstSpiritFsindex' } | { __typename: 'FirstSpiritFsrefeferencepage' } | { __typename: 'FirstSpiritFsreferencedataset' } | { __typename: 'FirstSpiritFsreferencepicture' } | { __typename: 'FirstSpiritFsreferencfile' } | { __typename: 'FirstSpiritFtsLanguageMapping' } | { __typename: 'FirstSpiritFtsMultiplePageEntry' } | { __typename: 'FirstSpiritGlobalTranslation' } | { __typename: 'FirstSpiritGoogleMaps' } | { __typename: 'FirstSpiritInteractiveImage' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink' } | { __typename: 'FirstSpiritLatestNews' } | { __typename: 'FirstSpiritLocation' } | { __typename: 'FirstSpiritMediaLink' } | { __typename: 'FirstSpiritNewsOverview' } | { __typename: 'FirstSpiritProductCategoryTeaser' } | { __typename: 'FirstSpiritRedirect' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | { __typename: 'FirstSpiritSmartlivingLocation' } | { __typename: 'FirstSpiritSmartlivingNews' } | { __typename: 'FirstSpiritSmartlivingProduct' } | { __typename: 'FirstSpiritSmartlivingProductOverview' } | { __typename: 'FirstSpiritSmartlivingTag' } | { __typename: 'FirstSpiritStage' } | { __typename: 'FirstSpiritSteps' } | { __typename: 'FirstSpiritStepsItem', stTitle?: string | null, stText?: any | null } | { __typename: 'FirstSpiritTable' } | { __typename: 'FirstSpiritTask' } | { __typename: 'FirstSpiritTeaser' } | { __typename: 'FirstSpiritTextImage' } } | null> | null } & { ' $fragmentName'?: 'FirstSpiritStepsFragmentFragment' };

export type FirstSpiritAccordionFragmentFragment = { __typename?: 'FirstSpiritAccordion', stHeadline?: string | null, stSubline?: string | null, stInfo?: any | null, stAccordion?: Array<{ __typename: 'FirstSpiritSection', data: { __typename: 'FirstSpiritAccordion' } | { __typename: 'FirstSpiritAccordionItem', stTitle?: string | null, stContent?: any | null } | { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritFeature' } | { __typename: 'FirstSpiritFeatures' } | { __typename: 'FirstSpiritFscataloglinktest' } | { __typename: 'FirstSpiritFscatalogsectiontest' } | { __typename: 'FirstSpiritFsdatasettest' } | { __typename: 'FirstSpiritFsindex' } | { __typename: 'FirstSpiritFsrefeferencepage' } | { __typename: 'FirstSpiritFsreferencedataset' } | { __typename: 'FirstSpiritFsreferencepicture' } | { __typename: 'FirstSpiritFsreferencfile' } | { __typename: 'FirstSpiritFtsLanguageMapping' } | { __typename: 'FirstSpiritFtsMultiplePageEntry' } | { __typename: 'FirstSpiritGlobalTranslation' } | { __typename: 'FirstSpiritGoogleMaps' } | { __typename: 'FirstSpiritInteractiveImage' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink' } | { __typename: 'FirstSpiritLatestNews' } | { __typename: 'FirstSpiritLocation' } | { __typename: 'FirstSpiritMediaLink' } | { __typename: 'FirstSpiritNewsOverview' } | { __typename: 'FirstSpiritProductCategoryTeaser' } | { __typename: 'FirstSpiritRedirect' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | { __typename: 'FirstSpiritSmartlivingLocation' } | { __typename: 'FirstSpiritSmartlivingNews' } | { __typename: 'FirstSpiritSmartlivingProduct' } | { __typename: 'FirstSpiritSmartlivingProductOverview' } | { __typename: 'FirstSpiritSmartlivingTag' } | { __typename: 'FirstSpiritStage' } | { __typename: 'FirstSpiritSteps' } | { __typename: 'FirstSpiritStepsItem' } | { __typename: 'FirstSpiritTable' } | { __typename: 'FirstSpiritTask' } | { __typename: 'FirstSpiritTeaser' } | { __typename: 'FirstSpiritTextImage' } } | null> | null } & { ' $fragmentName'?: 'FirstSpiritAccordionFragmentFragment' };

export type FirstSpiritFeaturesFragmentFragment = { __typename?: 'FirstSpiritFeatures', stHeadline?: string | null, stText?: any | null, stFeatures?: Array<{ __typename: 'FirstSpiritSection', data: { __typename: 'FirstSpiritAccordion' } | { __typename: 'FirstSpiritAccordionItem' } | { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritFeature', stTitle?: string | null, stText?: any | null, stImageAltText?: string | null, stType?: { __typename?: 'FirstSpiritOption', key?: string | null } | null, stLink?: { __typename?: 'FirstSpiritLink', data?: { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink', ltText?: string | null, ltLink?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage' } | { __typename: 'FirstSpiritPageRef', page?: { __typename?: 'FirstSpiritPage', route?: string | null } | null } | { __typename: 'FirstSpiritReference' } | null } | { __typename: 'FirstSpiritMediaLink' } | null } | null, stImage?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage', resolutions?: { __typename?: 'FirstSpiritResolution', original?: { __typename?: 'FirstSpiritResolutionProps', url: string } | null } | null } | { __typename: 'FirstSpiritPageRef' } | { __typename: 'FirstSpiritReference' } | null } | { __typename: 'FirstSpiritFeatures' } | { __typename: 'FirstSpiritFscataloglinktest' } | { __typename: 'FirstSpiritFscatalogsectiontest' } | { __typename: 'FirstSpiritFsdatasettest' } | { __typename: 'FirstSpiritFsindex' } | { __typename: 'FirstSpiritFsrefeferencepage' } | { __typename: 'FirstSpiritFsreferencedataset' } | { __typename: 'FirstSpiritFsreferencepicture' } | { __typename: 'FirstSpiritFsreferencfile' } | { __typename: 'FirstSpiritFtsLanguageMapping' } | { __typename: 'FirstSpiritFtsMultiplePageEntry' } | { __typename: 'FirstSpiritGlobalTranslation' } | { __typename: 'FirstSpiritGoogleMaps' } | { __typename: 'FirstSpiritInteractiveImage' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink' } | { __typename: 'FirstSpiritLatestNews' } | { __typename: 'FirstSpiritLocation' } | { __typename: 'FirstSpiritMediaLink' } | { __typename: 'FirstSpiritNewsOverview' } | { __typename: 'FirstSpiritProductCategoryTeaser' } | { __typename: 'FirstSpiritRedirect' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | { __typename: 'FirstSpiritSmartlivingLocation' } | { __typename: 'FirstSpiritSmartlivingNews' } | { __typename: 'FirstSpiritSmartlivingProduct' } | { __typename: 'FirstSpiritSmartlivingProductOverview' } | { __typename: 'FirstSpiritSmartlivingTag' } | { __typename: 'FirstSpiritStage' } | { __typename: 'FirstSpiritSteps' } | { __typename: 'FirstSpiritStepsItem' } | { __typename: 'FirstSpiritTable' } | { __typename: 'FirstSpiritTask' } | { __typename: 'FirstSpiritTeaser' } | { __typename: 'FirstSpiritTextImage' } } | null> | null } & { ' $fragmentName'?: 'FirstSpiritFeaturesFragmentFragment' };

export type FirstSpiritGoogleMapsFragmentFragment = { __typename?: 'FirstSpiritGoogleMaps', stHeadline?: string | null, stSubheadline?: string | null, stInitialZoom?: number | null, stInitialLat?: number | null, stInitialLong?: number | null } & { ' $fragmentName'?: 'FirstSpiritGoogleMapsFragmentFragment' };

export type FirstSpiritNewsOverviewFragmentFragment = { __typename?: 'FirstSpiritNewsOverview', stHeadline?: string | null, stDataPage?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage' } | { __typename: 'FirstSpiritPageRef', type?: string | null, referenceId?: string | null, referenceType?: string | null, page?: { __typename?: 'FirstSpiritPage', fsId: string } | null } | { __typename: 'FirstSpiritReference' } | null } & { ' $fragmentName'?: 'FirstSpiritNewsOverviewFragmentFragment' };

export type FirstSpiritSmartlivingProductOverviewFragmentFragment = { __typename?: 'FirstSpiritSmartlivingProductOverview', data?: any | null } & { ' $fragmentName'?: 'FirstSpiritSmartlivingProductOverviewFragmentFragment' };

export type FirstSpiritSmartLivingNewsFragmentFragment = { __typename?: 'FirstSpiritSmartlivingNews', ttHeadline?: string | null, ttSubheadline?: string | null, ttDate?: any | null, ttAuthor?: any | null, ttTags?: any | null, ttImageAltText?: string | null, ttTeaserText?: string | null, ttArticleText?: any | null, ttImage?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage', resolutions?: { __typename?: 'FirstSpiritResolution', original?: { __typename?: 'FirstSpiritResolutionProps', url: string } | null } | null } | { __typename: 'FirstSpiritPageRef' } | { __typename: 'FirstSpiritReference' } | null } & { ' $fragmentName'?: 'FirstSpiritSmartLivingNewsFragmentFragment' };

export type FirstSpiritSmartLivingLocationFragmentFragment = { __typename?: 'FirstSpiritSmartlivingLocation', ttName?: string | null, ttDescription?: any | null, ttLat?: number | null, ttLong?: number | null } & { ' $fragmentName'?: 'FirstSpiritSmartLivingLocationFragmentFragment' };

export type FirstSpiritTableFragmentFragment = { __typename?: 'FirstSpiritTable', stHeadline?: string | null, stText?: any | null, stTable?: any | null } & { ' $fragmentName'?: 'FirstSpiritTableFragmentFragment' };

export type GcaPageByNameQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type GcaPageByNameQuery = { __typename?: 'Query', firstSpiritGcaPage?: { __typename?: 'FirstSpiritGcaPage', data: { __typename: 'FirstSpiritFtsGcaMapping' } | { __typename: 'FirstSpiritGcaFooter', gcCopyright?: any | null, gcLinks?: Array<{ __typename?: 'FirstSpiritSection', data: { __typename: 'FirstSpiritAccordion' } | { __typename: 'FirstSpiritAccordionItem' } | { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritFeature' } | { __typename: 'FirstSpiritFeatures' } | { __typename: 'FirstSpiritFscataloglinktest' } | { __typename: 'FirstSpiritFscatalogsectiontest' } | { __typename: 'FirstSpiritFsdatasettest' } | { __typename: 'FirstSpiritFsindex' } | { __typename: 'FirstSpiritFsrefeferencepage' } | { __typename: 'FirstSpiritFsreferencedataset' } | { __typename: 'FirstSpiritFsreferencepicture' } | { __typename: 'FirstSpiritFsreferencfile' } | { __typename: 'FirstSpiritFtsLanguageMapping' } | { __typename: 'FirstSpiritFtsMultiplePageEntry' } | { __typename: 'FirstSpiritGlobalTranslation' } | { __typename: 'FirstSpiritGoogleMaps' } | { __typename: 'FirstSpiritInteractiveImage' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink', ltText?: string | null, ltLink?: { __typename?: 'FirstSpiritDatasetValue' } | { __typename?: 'FirstSpiritFile' } | { __typename?: 'FirstSpiritImage' } | { __typename: 'FirstSpiritPageRef', page?: { __typename?: 'FirstSpiritPage', route?: string | null } | null } | { __typename?: 'FirstSpiritReference' } | null } | { __typename: 'FirstSpiritLatestNews' } | { __typename: 'FirstSpiritLocation' } | { __typename: 'FirstSpiritMediaLink' } | { __typename: 'FirstSpiritNewsOverview' } | { __typename: 'FirstSpiritProductCategoryTeaser' } | { __typename: 'FirstSpiritRedirect' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | { __typename: 'FirstSpiritSmartlivingLocation' } | { __typename: 'FirstSpiritSmartlivingNews' } | { __typename: 'FirstSpiritSmartlivingProduct' } | { __typename: 'FirstSpiritSmartlivingProductOverview' } | { __typename: 'FirstSpiritSmartlivingTag' } | { __typename: 'FirstSpiritStage' } | { __typename: 'FirstSpiritSteps' } | { __typename: 'FirstSpiritStepsItem' } | { __typename: 'FirstSpiritTable' } | { __typename: 'FirstSpiritTask' } | { __typename: 'FirstSpiritTeaser' } | { __typename: 'FirstSpiritTextImage' } } | null> | null } | { __typename: 'FirstSpiritHomepage' } | { __typename: 'FirstSpiritLocationsJson' } | { __typename: 'FirstSpiritMetadata' } | { __typename: 'FirstSpiritMpp' } | { __typename: 'FirstSpiritNewsJson' } | { __typename: 'FirstSpiritProjectSettings' } | { __typename: 'FirstSpiritRedirects' } | { __typename: 'FirstSpiritStandard' } | { __typename: 'FirstSpiritTranslationstudioConfiguration' } } | null };

export type FsNavigationQueryQueryVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type FsNavigationQueryQuery = { __typename?: 'Query', firstSpiritNavigationData?: { __typename?: 'FirstSpiritNavigationData', structure: Array<{ __typename?: 'FirstSpiritStructureItem', navigationItem: { __typename?: 'FirstSpiritNavigationItem', label?: string | null, seoRoute?: string | null, fsNavItemId: string, page?: { __typename?: 'FirstSpiritPage', id: string } | null }, structureChildren: Array<{ __typename?: 'FirstSpiritStructureItem', navigationItem: { __typename?: 'FirstSpiritNavigationItem', label?: string | null, seoRoute?: string | null, fsNavItemId: string, page?: { __typename?: 'FirstSpiritPage', id: string } | null }, structureChildren: Array<{ __typename?: 'FirstSpiritStructureItem', navigationItem: { __typename?: 'FirstSpiritNavigationItem', fsNavItemId: string, label?: string | null, seoRoute?: string | null, page?: { __typename?: 'FirstSpiritPage', id: string } | null } } | null> } | null> } | null> } | null };

export type PageByRouteQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  route: Scalars['String']['input'];
}>;


export type PageByRouteQuery = { __typename?: 'Query', firstSpiritPage?: { __typename?: 'FirstSpiritPage', layout: string, name: string, id: string, previewId: string, data: { __typename: 'FirstSpiritFtsGcaMapping' } | { __typename: 'FirstSpiritGcaFooter' } | { __typename: 'FirstSpiritHomepage' } | { __typename: 'FirstSpiritLocationsJson' } | { __typename: 'FirstSpiritMetadata' } | { __typename: 'FirstSpiritMpp' } | { __typename: 'FirstSpiritNewsJson' } | { __typename: 'FirstSpiritProjectSettings' } | { __typename: 'FirstSpiritRedirects' } | { __typename: 'FirstSpiritStandard', ptHeadline?: string | null, ptSubheadline?: string | null, ptMdImageAltText?: string | null, ptImage?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage', resolutions?: { __typename?: 'FirstSpiritResolution', original?: { __typename?: 'FirstSpiritResolutionProps', url: string } | null } | null } | { __typename: 'FirstSpiritPageRef' } | { __typename: 'FirstSpiritReference' } | null } | { __typename: 'FirstSpiritTranslationstudioConfiguration' }, pageBodies?: Array<{ __typename?: 'FirstSpiritPageBody', name: string, children?: Array<{ __typename?: 'FirstSpiritContent2Section' } | { __typename?: 'FirstSpiritDataset' } | { __typename: 'FirstSpiritSection', id: string, data: (
          { __typename: 'FirstSpiritAccordion' }
          & { ' $fragmentRefs'?: { 'FirstSpiritAccordionFragmentFragment': FirstSpiritAccordionFragmentFragment } }
        ) | { __typename: 'FirstSpiritAccordionItem' } | { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritFeature' } | (
          { __typename: 'FirstSpiritFeatures' }
          & { ' $fragmentRefs'?: { 'FirstSpiritFeaturesFragmentFragment': FirstSpiritFeaturesFragmentFragment } }
        ) | { __typename: 'FirstSpiritFscataloglinktest' } | { __typename: 'FirstSpiritFscatalogsectiontest' } | { __typename: 'FirstSpiritFsdatasettest' } | { __typename: 'FirstSpiritFsindex' } | { __typename: 'FirstSpiritFsrefeferencepage' } | { __typename: 'FirstSpiritFsreferencedataset' } | { __typename: 'FirstSpiritFsreferencepicture' } | { __typename: 'FirstSpiritFsreferencfile' } | { __typename: 'FirstSpiritFtsLanguageMapping' } | { __typename: 'FirstSpiritFtsMultiplePageEntry' } | { __typename: 'FirstSpiritGlobalTranslation' } | (
          { __typename: 'FirstSpiritGoogleMaps' }
          & { ' $fragmentRefs'?: { 'FirstSpiritGoogleMapsFragmentFragment': FirstSpiritGoogleMapsFragmentFragment } }
        ) | { __typename: 'FirstSpiritInteractiveImage' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink' } | { __typename: 'FirstSpiritLatestNews' } | { __typename: 'FirstSpiritLocation' } | { __typename: 'FirstSpiritMediaLink' } | (
          { __typename: 'FirstSpiritNewsOverview' }
          & { ' $fragmentRefs'?: { 'FirstSpiritNewsOverviewFragmentFragment': FirstSpiritNewsOverviewFragmentFragment } }
        ) | (
          { __typename: 'FirstSpiritProductCategoryTeaser' }
          & { ' $fragmentRefs'?: { 'FirstSpiritProductCategoryTeaserFragmentFragment': FirstSpiritProductCategoryTeaserFragmentFragment } }
        ) | { __typename: 'FirstSpiritRedirect' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | { __typename: 'FirstSpiritSmartlivingLocation' } | { __typename: 'FirstSpiritSmartlivingNews' } | { __typename: 'FirstSpiritSmartlivingProduct' } | (
          { __typename: 'FirstSpiritSmartlivingProductOverview' }
          & { ' $fragmentRefs'?: { 'FirstSpiritSmartlivingProductOverviewFragmentFragment': FirstSpiritSmartlivingProductOverviewFragmentFragment } }
        ) | { __typename: 'FirstSpiritSmartlivingTag' } | (
          { __typename: 'FirstSpiritStage' }
          & { ' $fragmentRefs'?: { 'FirstSpiritStageFragmentFragment': FirstSpiritStageFragmentFragment } }
        ) | (
          { __typename: 'FirstSpiritSteps' }
          & { ' $fragmentRefs'?: { 'FirstSpiritStepsFragmentFragment': FirstSpiritStepsFragmentFragment } }
        ) | { __typename: 'FirstSpiritStepsItem' } | (
          { __typename: 'FirstSpiritTable' }
          & { ' $fragmentRefs'?: { 'FirstSpiritTableFragmentFragment': FirstSpiritTableFragmentFragment } }
        ) | { __typename: 'FirstSpiritTask' } | (
          { __typename: 'FirstSpiritTeaser' }
          & { ' $fragmentRefs'?: { 'FirstSpiritTeaserFragmentFragment': FirstSpiritTeaserFragmentFragment } }
        ) | (
          { __typename: 'FirstSpiritTextImage' }
          & { ' $fragmentRefs'?: { 'FirstSpiritTextImageFragmentFragment': FirstSpiritTextImageFragmentFragment } }
        ) }> | null } | null> | null } | null };

export type ProductsQueryVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type ProductsQuery = { __typename?: 'Query', allFirstSpiritDataset: { __typename?: 'FirstSpiritDatasetConnection', nodes: Array<{ __typename?: 'FirstSpiritDataset', fsId: string, entityType: string, route: string, data: { __typename: 'FirstSpiritGlobalTranslation' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | { __typename: 'FirstSpiritSmartlivingLocation' } | { __typename: 'FirstSpiritSmartlivingNews' } | { __typename: 'FirstSpiritSmartlivingProduct', ttName?: string | null, ttPrice?: string | null, ttTeaserText?: string | null, ttCategories?: any | null, ttDescription?: any | null, ttImageAltText?: string | null, ttImage?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage', resolutions?: { __typename?: 'FirstSpiritResolution', original?: { __typename?: 'FirstSpiritResolutionProps', url: string } | null } | null } | { __typename: 'FirstSpiritPageRef' } | { __typename: 'FirstSpiritReference' } | null } | { __typename: 'FirstSpiritSmartlivingProductOverview' } | { __typename: 'FirstSpiritSmartlivingTag' } | { __typename: 'FirstSpiritTask' } }> } };

export type ProductDetailQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type ProductDetailQuery = { __typename?: 'Query', firstSpiritDataset?: { __typename?: 'FirstSpiritDataset', data: { __typename: 'FirstSpiritGlobalTranslation' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | { __typename: 'FirstSpiritSmartlivingLocation' } | { __typename: 'FirstSpiritSmartlivingNews' } | { __typename: 'FirstSpiritSmartlivingProduct', ttName?: string | null, ttPrice?: string | null, ttTeaserText?: string | null, ttCategories?: any | null, ttDescription?: any | null, ttImageAltText?: string | null, ttImage?: { __typename: 'FirstSpiritDatasetValue' } | { __typename: 'FirstSpiritFile' } | { __typename: 'FirstSpiritImage', resolutions?: { __typename?: 'FirstSpiritResolution', original?: { __typename?: 'FirstSpiritResolutionProps', url: string } | null } | null } | { __typename: 'FirstSpiritPageRef' } | { __typename: 'FirstSpiritReference' } | null } | { __typename: 'FirstSpiritSmartlivingProductOverview' } | { __typename: 'FirstSpiritSmartlivingTag' } | { __typename: 'FirstSpiritTask' } } | null };

export type SectionByIdQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type SectionByIdQuery = { __typename?: 'Query', allFirstSpiritSection: { __typename?: 'FirstSpiritSectionConnection', nodes: Array<{ __typename?: 'FirstSpiritSection', name?: string | null, fsId: string, data: (
        { __typename: 'FirstSpiritAccordion' }
        & { ' $fragmentRefs'?: { 'FirstSpiritAccordionFragmentFragment': FirstSpiritAccordionFragmentFragment } }
      ) | { __typename: 'FirstSpiritAccordionItem' } | { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritFeature' } | (
        { __typename: 'FirstSpiritFeatures' }
        & { ' $fragmentRefs'?: { 'FirstSpiritFeaturesFragmentFragment': FirstSpiritFeaturesFragmentFragment } }
      ) | { __typename: 'FirstSpiritFscataloglinktest' } | { __typename: 'FirstSpiritFscatalogsectiontest' } | { __typename: 'FirstSpiritFsdatasettest' } | { __typename: 'FirstSpiritFsindex' } | { __typename: 'FirstSpiritFsrefeferencepage' } | { __typename: 'FirstSpiritFsreferencedataset' } | { __typename: 'FirstSpiritFsreferencepicture' } | { __typename: 'FirstSpiritFsreferencfile' } | { __typename: 'FirstSpiritFtsLanguageMapping' } | { __typename: 'FirstSpiritFtsMultiplePageEntry' } | { __typename: 'FirstSpiritGlobalTranslation' } | (
        { __typename: 'FirstSpiritGoogleMaps' }
        & { ' $fragmentRefs'?: { 'FirstSpiritGoogleMapsFragmentFragment': FirstSpiritGoogleMapsFragmentFragment } }
      ) | { __typename: 'FirstSpiritInteractiveImage' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink' } | { __typename: 'FirstSpiritLatestNews' } | { __typename: 'FirstSpiritLocation' } | { __typename: 'FirstSpiritMediaLink' } | { __typename: 'FirstSpiritNewsOverview' } | (
        { __typename: 'FirstSpiritProductCategoryTeaser' }
        & { ' $fragmentRefs'?: { 'FirstSpiritProductCategoryTeaserFragmentFragment': FirstSpiritProductCategoryTeaserFragmentFragment } }
      ) | { __typename: 'FirstSpiritRedirect' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | { __typename: 'FirstSpiritSmartlivingLocation' } | { __typename: 'FirstSpiritSmartlivingNews' } | { __typename: 'FirstSpiritSmartlivingProduct' } | { __typename: 'FirstSpiritSmartlivingProductOverview' } | { __typename: 'FirstSpiritSmartlivingTag' } | (
        { __typename: 'FirstSpiritStage' }
        & { ' $fragmentRefs'?: { 'FirstSpiritStageFragmentFragment': FirstSpiritStageFragmentFragment } }
      ) | (
        { __typename: 'FirstSpiritSteps' }
        & { ' $fragmentRefs'?: { 'FirstSpiritStepsFragmentFragment': FirstSpiritStepsFragmentFragment } }
      ) | { __typename: 'FirstSpiritStepsItem' } | (
        { __typename: 'FirstSpiritTable' }
        & { ' $fragmentRefs'?: { 'FirstSpiritTableFragmentFragment': FirstSpiritTableFragmentFragment } }
      ) | { __typename: 'FirstSpiritTask' } | (
        { __typename: 'FirstSpiritTeaser' }
        & { ' $fragmentRefs'?: { 'FirstSpiritTeaserFragmentFragment': FirstSpiritTeaserFragmentFragment } }
      ) | (
        { __typename: 'FirstSpiritTextImage' }
        & { ' $fragmentRefs'?: { 'FirstSpiritTextImageFragmentFragment': FirstSpiritTextImageFragmentFragment } }
      ) }> } };

export type SectionByTypeQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type SectionByTypeQuery = { __typename?: 'Query', allFirstSpiritSection: { __typename?: 'FirstSpiritSectionConnection', nodes: Array<{ __typename?: 'FirstSpiritSection', name?: string | null, fsId: string, data: (
        { __typename: 'FirstSpiritAccordion' }
        & { ' $fragmentRefs'?: { 'FirstSpiritAccordionFragmentFragment': FirstSpiritAccordionFragmentFragment } }
      ) | { __typename: 'FirstSpiritAccordionItem' } | { __typename: 'FirstSpiritDatasetLink' } | { __typename: 'FirstSpiritExternalLink' } | { __typename: 'FirstSpiritFeature' } | (
        { __typename: 'FirstSpiritFeatures' }
        & { ' $fragmentRefs'?: { 'FirstSpiritFeaturesFragmentFragment': FirstSpiritFeaturesFragmentFragment } }
      ) | { __typename: 'FirstSpiritFscataloglinktest' } | { __typename: 'FirstSpiritFscatalogsectiontest' } | { __typename: 'FirstSpiritFsdatasettest' } | { __typename: 'FirstSpiritFsindex' } | { __typename: 'FirstSpiritFsrefeferencepage' } | { __typename: 'FirstSpiritFsreferencedataset' } | { __typename: 'FirstSpiritFsreferencepicture' } | { __typename: 'FirstSpiritFsreferencfile' } | { __typename: 'FirstSpiritFtsLanguageMapping' } | { __typename: 'FirstSpiritFtsMultiplePageEntry' } | { __typename: 'FirstSpiritGlobalTranslation' } | (
        { __typename: 'FirstSpiritGoogleMaps' }
        & { ' $fragmentRefs'?: { 'FirstSpiritGoogleMapsFragmentFragment': FirstSpiritGoogleMapsFragmentFragment } }
      ) | { __typename: 'FirstSpiritInteractiveImage' } | { __typename: 'FirstSpiritInteractiveImageLink' } | { __typename: 'FirstSpiritInternalLink' } | { __typename: 'FirstSpiritLatestNews' } | { __typename: 'FirstSpiritLocation' } | { __typename: 'FirstSpiritMediaLink' } | { __typename: 'FirstSpiritNewsOverview' } | (
        { __typename: 'FirstSpiritProductCategoryTeaser' }
        & { ' $fragmentRefs'?: { 'FirstSpiritProductCategoryTeaserFragmentFragment': FirstSpiritProductCategoryTeaserFragmentFragment } }
      ) | { __typename: 'FirstSpiritRedirect' } | { __typename: 'FirstSpiritRequests' } | { __typename: 'FirstSpiritSmartlivingAuthor' } | { __typename: 'FirstSpiritSmartlivingCategory' } | { __typename: 'FirstSpiritSmartlivingLocation' } | { __typename: 'FirstSpiritSmartlivingNews' } | { __typename: 'FirstSpiritSmartlivingProduct' } | { __typename: 'FirstSpiritSmartlivingProductOverview' } | { __typename: 'FirstSpiritSmartlivingTag' } | (
        { __typename: 'FirstSpiritStage' }
        & { ' $fragmentRefs'?: { 'FirstSpiritStageFragmentFragment': FirstSpiritStageFragmentFragment } }
      ) | (
        { __typename: 'FirstSpiritSteps' }
        & { ' $fragmentRefs'?: { 'FirstSpiritStepsFragmentFragment': FirstSpiritStepsFragmentFragment } }
      ) | { __typename: 'FirstSpiritStepsItem' } | (
        { __typename: 'FirstSpiritTable' }
        & { ' $fragmentRefs'?: { 'FirstSpiritTableFragmentFragment': FirstSpiritTableFragmentFragment } }
      ) | { __typename: 'FirstSpiritTask' } | (
        { __typename: 'FirstSpiritTeaser' }
        & { ' $fragmentRefs'?: { 'FirstSpiritTeaserFragmentFragment': FirstSpiritTeaserFragmentFragment } }
      ) | (
        { __typename: 'FirstSpiritTextImage' }
        & { ' $fragmentRefs'?: { 'FirstSpiritTextImageFragmentFragment': FirstSpiritTextImageFragmentFragment } }
      ) }> } };

export const FirstSpiritTeaserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTeaserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"stLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<FirstSpiritTeaserFragmentFragment, unknown>;
export const FirstSpiritStageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritStageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritStage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","alias":{"kind":"Name","value":"stSubHeadlineTextImageStage"},"name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FirstSpiritStageFragmentFragment, unknown>;
export const FirstSpiritTextImageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTextImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTextImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","alias":{"kind":"Name","value":"stSubHeadlineTextImage"},"name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stColumns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FirstSpiritTextImageFragmentFragment, unknown>;
export const FirstSpiritProductCategoryTeaserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stTextAlignment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCategoryLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<FirstSpiritProductCategoryTeaserFragmentFragment, unknown>;
export const FirstSpiritStepsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritStepsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSteps"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stSteps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritStepsItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FirstSpiritStepsFragmentFragment, unknown>;
export const FirstSpiritAccordionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritAccordionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubline"}},{"kind":"Field","name":{"kind":"Name","value":"stInfo"}},{"kind":"Field","name":{"kind":"Name","value":"stAccordion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritAccordionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stContent"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FirstSpiritAccordionFragmentFragment, unknown>;
export const FirstSpiritFeaturesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritFeaturesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritFeatures"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritFeature"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"stType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FirstSpiritFeaturesFragmentFragment, unknown>;
export const FirstSpiritGoogleMapsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritGoogleMapsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritGoogleMaps"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialZoom"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialLat"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialLong"}}]}}]} as unknown as DocumentNode<FirstSpiritGoogleMapsFragmentFragment, unknown>;
export const FirstSpiritNewsOverviewFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritNewsOverviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritNewsOverview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stDataPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"referenceId"}},{"kind":"Field","name":{"kind":"Name","value":"referenceType"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fsId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FirstSpiritNewsOverviewFragmentFragment, unknown>;
export const FirstSpiritSmartlivingProductOverviewFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritSmartlivingProductOverviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSmartlivingProductOverview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]} as unknown as DocumentNode<FirstSpiritSmartlivingProductOverviewFragmentFragment, unknown>;
export const FirstSpiritSmartLivingNewsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritSmartLivingNewsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSmartlivingNews"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ttHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"ttSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"ttDate"}},{"kind":"Field","name":{"kind":"Name","value":"ttAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"ttTags"}},{"kind":"Field","name":{"kind":"Name","value":"ttImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ttImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"ttTeaserText"}},{"kind":"Field","name":{"kind":"Name","value":"ttArticleText"}}]}}]} as unknown as DocumentNode<FirstSpiritSmartLivingNewsFragmentFragment, unknown>;
export const FirstSpiritSmartLivingLocationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritSmartLivingLocationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSmartlivingLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ttName"}},{"kind":"Field","name":{"kind":"Name","value":"ttDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ttLat"}},{"kind":"Field","name":{"kind":"Name","value":"ttLong"}}]}}]} as unknown as DocumentNode<FirstSpiritSmartLivingLocationFragmentFragment, unknown>;
export const FirstSpiritTableFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTableFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stTable"}}]}}]} as unknown as DocumentNode<FirstSpiritTableFragmentFragment, unknown>;
export const DatasetsByTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"datasetsByType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFirstSpiritDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"entityType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"route"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritSmartLivingNewsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritSmartLivingLocationFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritSmartLivingNewsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSmartlivingNews"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ttHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"ttSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"ttDate"}},{"kind":"Field","name":{"kind":"Name","value":"ttAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"ttTags"}},{"kind":"Field","name":{"kind":"Name","value":"ttImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ttImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"ttTeaserText"}},{"kind":"Field","name":{"kind":"Name","value":"ttArticleText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritSmartLivingLocationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSmartlivingLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ttName"}},{"kind":"Field","name":{"kind":"Name","value":"ttDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ttLat"}},{"kind":"Field","name":{"kind":"Name","value":"ttLong"}}]}}]} as unknown as DocumentNode<DatasetsByTypeQuery, DatasetsByTypeQueryVariables>;
export const GcaPageByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"gcaPageByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstSpiritGcaPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritGcaFooter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gcCopyright"}},{"kind":"Field","name":{"kind":"Name","value":"gcLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GcaPageByNameQuery, GcaPageByNameQueryVariables>;
export const FsNavigationQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fsNavigationQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstSpiritNavigationData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"structure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"seoRoute"}},{"kind":"Field","name":{"kind":"Name","value":"fsNavItemId"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"structureChildren"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"seoRoute"}},{"kind":"Field","name":{"kind":"Name","value":"fsNavItemId"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"structureChildren"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fsNavItemId"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"seoRoute"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FsNavigationQueryQuery, FsNavigationQueryQueryVariables>;
export const PageByRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pageByRoute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"route"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstSpiritPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"route"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"route"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"previewId"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritStandard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ptHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"ptSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"ptMdImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"ptImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageBodies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritTeaserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritStageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritTextImageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritStepsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritAccordionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritFeaturesFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritGoogleMapsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritTableFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritNewsOverviewFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritSmartlivingProductOverviewFragment"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTeaserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"stLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritStageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritStage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","alias":{"kind":"Name","value":"stSubHeadlineTextImageStage"},"name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTextImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTextImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","alias":{"kind":"Name","value":"stSubHeadlineTextImage"},"name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stColumns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stTextAlignment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCategoryLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritStepsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSteps"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stSteps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritStepsItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritAccordionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubline"}},{"kind":"Field","name":{"kind":"Name","value":"stInfo"}},{"kind":"Field","name":{"kind":"Name","value":"stAccordion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritAccordionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stContent"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritFeaturesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritFeatures"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritFeature"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"stType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritGoogleMapsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritGoogleMaps"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialZoom"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialLat"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialLong"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTableFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stTable"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritNewsOverviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritNewsOverview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stDataPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"referenceId"}},{"kind":"Field","name":{"kind":"Name","value":"referenceType"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fsId"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritSmartlivingProductOverviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSmartlivingProductOverview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]} as unknown as DocumentNode<PageByRouteQuery, PageByRouteQueryVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFirstSpiritDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"entityType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"product","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fsId"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"route"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSmartlivingProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ttName"}},{"kind":"Field","name":{"kind":"Name","value":"ttPrice"}},{"kind":"Field","name":{"kind":"Name","value":"ttTeaserText"}},{"kind":"Field","name":{"kind":"Name","value":"ttCategories"}},{"kind":"Field","name":{"kind":"Name","value":"ttDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ttImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"ttImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const ProductDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstSpiritDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"fsId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSmartlivingProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ttName"}},{"kind":"Field","name":{"kind":"Name","value":"ttPrice"}},{"kind":"Field","name":{"kind":"Name","value":"ttTeaserText"}},{"kind":"Field","name":{"kind":"Name","value":"ttCategories"}},{"kind":"Field","name":{"kind":"Name","value":"ttDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ttImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"ttImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductDetailQuery, ProductDetailQueryVariables>;
export const SectionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sectionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFirstSpiritSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fsId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritTeaserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritStageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritTextImageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritStepsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritAccordionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritFeaturesFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritGoogleMapsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritTableFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fsId"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTeaserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"stLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritStageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritStage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","alias":{"kind":"Name","value":"stSubHeadlineTextImageStage"},"name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTextImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTextImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","alias":{"kind":"Name","value":"stSubHeadlineTextImage"},"name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stColumns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stTextAlignment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCategoryLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritStepsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSteps"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stSteps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritStepsItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritAccordionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubline"}},{"kind":"Field","name":{"kind":"Name","value":"stInfo"}},{"kind":"Field","name":{"kind":"Name","value":"stAccordion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritAccordionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stContent"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritFeaturesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritFeatures"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritFeature"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"stType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritGoogleMapsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritGoogleMaps"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialZoom"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialLat"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialLong"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTableFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stTable"}}]}}]} as unknown as DocumentNode<SectionByIdQuery, SectionByIdQueryVariables>;
export const SectionByTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sectionByType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFirstSpiritSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_locale"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"sectionType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritTeaserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritStageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritTextImageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritStepsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritAccordionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritFeaturesFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritGoogleMapsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FirstSpiritTableFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fsId"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTeaserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"stLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritStageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritStage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","alias":{"kind":"Name","value":"stSubHeadlineTextImageStage"},"name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTextImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTextImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","alias":{"kind":"Name","value":"stSubHeadlineTextImage"},"name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stColumns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritProductCategoryTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stTextAlignment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCategoryLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritStepsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSteps"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stSteps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritStepsItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritAccordionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubline"}},{"kind":"Field","name":{"kind":"Name","value":"stInfo"}},{"kind":"Field","name":{"kind":"Name","value":"stAccordion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritAccordionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stContent"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritFeaturesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritFeatures"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritFeature"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stImageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"stType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritInternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ltText"}},{"kind":"Field","name":{"kind":"Name","value":"ltLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritPageRef"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritGoogleMapsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritGoogleMaps"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stSubheadline"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialZoom"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialLat"}},{"kind":"Field","name":{"kind":"Name","value":"stInitialLong"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FirstSpiritTableFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FirstSpiritTable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"stText"}},{"kind":"Field","name":{"kind":"Name","value":"stTable"}}]}}]} as unknown as DocumentNode<SectionByTypeQuery, SectionByTypeQueryVariables>;