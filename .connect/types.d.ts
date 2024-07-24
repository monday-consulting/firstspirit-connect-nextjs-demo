/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: "Query";
  mutation: never;
  subscription: never;
  types: {
    Boolean: unknown;
    BooleanQueryOperatorInput: {
      kind: "INPUT_OBJECT";
      name: "BooleanQueryOperatorInput";
      isOneOf: false;
      inputFields: [
        { name: "eq"; type: { kind: "SCALAR"; name: "Boolean"; ofType: null }; defaultValue: null },
        { name: "ne"; type: { kind: "SCALAR"; name: "Boolean"; ofType: null }; defaultValue: null },
        {
          name: "in";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
          };
          defaultValue: null;
        },
        {
          name: "nin";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
          };
          defaultValue: null;
        },
      ];
    };
    Date: unknown;
    DateQueryOperatorInput: {
      kind: "INPUT_OBJECT";
      name: "DateQueryOperatorInput";
      isOneOf: false;
      inputFields: [
        { name: "eq"; type: { kind: "SCALAR"; name: "Date"; ofType: null }; defaultValue: null },
        { name: "ne"; type: { kind: "SCALAR"; name: "Date"; ofType: null }; defaultValue: null },
        { name: "gt"; type: { kind: "SCALAR"; name: "Date"; ofType: null }; defaultValue: null },
        { name: "gte"; type: { kind: "SCALAR"; name: "Date"; ofType: null }; defaultValue: null },
        { name: "lt"; type: { kind: "SCALAR"; name: "Date"; ofType: null }; defaultValue: null },
        { name: "lte"; type: { kind: "SCALAR"; name: "Date"; ofType: null }; defaultValue: null },
        {
          name: "in";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "Date"; ofType: null };
          };
          defaultValue: null;
        },
        {
          name: "nin";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "Date"; ofType: null };
          };
          defaultValue: null;
        },
      ];
    };
    FieldSelectorEnum: { name: "FieldSelectorEnum"; enumValues: "SELECT" };
    FirstSpiritChangeInfo: {
      kind: "OBJECT";
      name: "FirstSpiritChangeInfo";
      fields: {
        date: {
          name: "date";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Date"; ofType: null };
          };
        };
        lastSynced: {
          name: "lastSynced";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        revision: {
          name: "revision";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritChangeInfoFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritChangeInfoFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "date";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "revision";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "lastSynced";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritChangeInfoFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritChangeInfoFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "date";
          type: { kind: "INPUT_OBJECT"; name: "DateQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "revision";
          type: { kind: "INPUT_OBJECT"; name: "IntQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "lastSynced";
          type: { kind: "INPUT_OBJECT"; name: "IntQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritChangeInfoSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritChangeInfoSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "date";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "revision";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "lastSynced";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritDataset: {
      kind: "OBJECT";
      name: "FirstSpiritDataset";
      fields: {
        _locale: { name: "_locale"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        _objectId: {
          name: "_objectId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        _translations: {
          name: "_translations";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritDataset"; ofType: null };
          };
        };
        children: {
          name: "children";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "INTERFACE"; name: "Node"; ofType: null };
              };
            };
          };
        };
        data: {
          name: "data";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
        };
        entityType: {
          name: "entityType";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        fsId: {
          name: "fsId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        id: {
          name: "id";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
          };
        };
        internal: {
          name: "internal";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "Internal"; ofType: null };
          };
        };
        parent: { name: "parent"; type: { kind: "INTERFACE"; name: "Node"; ofType: null } };
        previewId: {
          name: "previewId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        remoteProjectId: {
          name: "remoteProjectId";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        route: {
          name: "route";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        routes: {
          name: "routes";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritDatasetRoute"; ofType: null };
          };
        };
        schema: {
          name: "schema";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        sections: {
          name: "sections";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritSection"; ofType: null };
          };
        };
        template: {
          name: "template";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        updatedAt: {
          name: "updatedAt";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritDatasetConnection: {
      kind: "OBJECT";
      name: "FirstSpiritDatasetConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritDatasetEdge"; ofType: null };
              };
            };
          };
        };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritDatasetGroupConnection"; ofType: null };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritDataset"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritDatasetEdge: {
      kind: "OBJECT";
      name: "FirstSpiritDatasetEdge";
      fields: {
        next: { name: "next"; type: { kind: "OBJECT"; name: "FirstSpiritDataset"; ofType: null } };
        node: {
          name: "node";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritDataset"; ofType: null };
          };
        };
        previous: {
          name: "previous";
          type: { kind: "OBJECT"; name: "FirstSpiritDataset"; ofType: null };
        };
      };
    };
    FirstSpiritDatasetFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritDatasetFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "schema";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "entityType";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "template";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "sections";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSectionFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "route";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "routes";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritDatasetRouteFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritDatasetFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFieldSelector"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritDatasetFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritDatasetFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "schema";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "entityType";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "template";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "sections";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSectionFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "route";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "routes";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritDatasetRouteFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritDatasetFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritDatasetFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritDatasetFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritDatasetFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritDatasetGroupConnection: {
      kind: "OBJECT";
      name: "FirstSpiritDatasetGroupConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritDatasetEdge"; ofType: null };
              };
            };
          };
        };
        field: {
          name: "field";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        fieldValue: { name: "fieldValue"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritDatasetGroupConnection"; ofType: null };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritDataset"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritDatasetRoute: {
      kind: "OBJECT";
      name: "FirstSpiritDatasetRoute";
      fields: {
        pageRef: {
          name: "pageRef";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritPage"; ofType: null };
          };
        };
        route: {
          name: "route";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritDatasetRouteFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritDatasetRouteFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "pageRef";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "route";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritDatasetRouteFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritDatasetRouteFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "pageRef";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "route";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritDatasetRouteFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritDatasetRouteFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritDatasetRouteFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritDatasetRouteSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritDatasetRouteSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "pageRef";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "route";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritDatasetSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritDatasetSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "schema";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "entityType";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "template";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "sections";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSectionSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "route";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "routes";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritDatasetRouteSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritDatasetSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritGcaPage: {
      kind: "OBJECT";
      name: "FirstSpiritGcaPage";
      fields: {
        _locale: { name: "_locale"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        _objectId: {
          name: "_objectId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        _translations: {
          name: "_translations";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritGcaPage"; ofType: null };
          };
        };
        children: {
          name: "children";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "INTERFACE"; name: "Node"; ofType: null };
              };
            };
          };
        };
        data: {
          name: "data";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
        };
        fsId: {
          name: "fsId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        id: {
          name: "id";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
          };
        };
        internal: {
          name: "internal";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "Internal"; ofType: null };
          };
        };
        layout: {
          name: "layout";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        meta: {
          name: "meta";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
        };
        name: {
          name: "name";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        pageBodies: {
          name: "pageBodies";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritPageBody"; ofType: null };
          };
        };
        parent: { name: "parent"; type: { kind: "INTERFACE"; name: "Node"; ofType: null } };
        previewId: {
          name: "previewId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        remoteProjectId: {
          name: "remoteProjectId";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        updatedAt: {
          name: "updatedAt";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritGcaPageConnection: {
      kind: "OBJECT";
      name: "FirstSpiritGcaPageConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritGcaPageEdge"; ofType: null };
              };
            };
          };
        };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritGcaPageGroupConnection"; ofType: null };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritGcaPage"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritGcaPageEdge: {
      kind: "OBJECT";
      name: "FirstSpiritGcaPageEdge";
      fields: {
        next: { name: "next"; type: { kind: "OBJECT"; name: "FirstSpiritGcaPage"; ofType: null } };
        node: {
          name: "node";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritGcaPage"; ofType: null };
          };
        };
        previous: {
          name: "previous";
          type: { kind: "OBJECT"; name: "FirstSpiritGcaPage"; ofType: null };
        };
      };
    };
    FirstSpiritGcaPageFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritGcaPageFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "name";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "layout";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "pageBodies";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageBodyFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritGcaPageFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFieldSelector"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritGcaPageFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritGcaPageFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "name";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "layout";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "pageBodies";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageBodyFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritGcaPageFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritGcaPageFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritGcaPageFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritGcaPageFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritGcaPageGroupConnection: {
      kind: "OBJECT";
      name: "FirstSpiritGcaPageGroupConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritGcaPageEdge"; ofType: null };
              };
            };
          };
        };
        field: {
          name: "field";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        fieldValue: { name: "fieldValue"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritGcaPageGroupConnection"; ofType: null };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritGcaPage"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritGcaPageSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritGcaPageSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "name";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "layout";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "pageBodies";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageBodySortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritGcaPageSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritIdentifier: {
      kind: "OBJECT";
      name: "FirstSpiritIdentifier";
      fields: {
        languageId: {
          name: "languageId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        navigationId: {
          name: "navigationId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        tenantId: {
          name: "tenantId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritIdentifierFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritIdentifierFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "tenantId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "navigationId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "languageId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritIdentifierFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritIdentifierFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "tenantId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "navigationId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "languageId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritIdentifierSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritIdentifierSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "tenantId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "navigationId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "languageId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritLifespan: {
      kind: "OBJECT";
      name: "FirstSpiritLifespan";
      fields: {
        end: { name: "end"; type: { kind: "SCALAR"; name: "Date"; ofType: null } };
        start: {
          name: "start";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Date"; ofType: null };
          };
        };
      };
    };
    FirstSpiritLifespanFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritLifespanFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "start";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "end";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritLifespanFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritLifespanFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "start";
          type: { kind: "INPUT_OBJECT"; name: "DateQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "end";
          type: { kind: "INPUT_OBJECT"; name: "DateQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritLifespanSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritLifespanSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "start";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "end";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritMasterLocale: {
      kind: "OBJECT";
      name: "FirstSpiritMasterLocale";
      fields: {
        country: {
          name: "country";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        identifier: {
          name: "identifier";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        language: {
          name: "language";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritMasterLocaleFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritMasterLocaleFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "country";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "language";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "identifier";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritMasterLocaleFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritMasterLocaleFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "country";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "language";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "identifier";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritMasterLocaleSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritMasterLocaleSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "country";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "language";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "identifier";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritMeta: {
      kind: "OBJECT";
      name: "FirstSpiritMeta";
      fields: {
        identifier: {
          name: "identifier";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritIdentifier"; ofType: null };
          };
        };
      };
    };
    FirstSpiritMetaFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritMetaFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "identifier";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritIdentifierFieldSelector"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritMetaFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritMetaFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "identifier";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritIdentifierFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritMetaSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritMetaSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "identifier";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritIdentifierSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritNavigationData: {
      kind: "OBJECT";
      name: "FirstSpiritNavigationData";
      fields: {
        _locale: { name: "_locale"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        _objectId: {
          name: "_objectId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        _translations: {
          name: "_translations";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritNavigationData"; ofType: null };
          };
        };
        changeInfo: {
          name: "changeInfo";
          type: { kind: "OBJECT"; name: "FirstSpiritChangeInfo"; ofType: null };
        };
        children: {
          name: "children";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "INTERFACE"; name: "Node"; ofType: null };
              };
            };
          };
        };
        fsId: {
          name: "fsId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        id: {
          name: "id";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
          };
        };
        idList: {
          name: "idList";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: { kind: "OBJECT"; name: "FirstSpiritNavigationItem"; ofType: null };
            };
          };
        };
        internal: {
          name: "internal";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "Internal"; ofType: null };
          };
        };
        locale: {
          name: "locale";
          type: { kind: "OBJECT"; name: "FirstSpiritMasterLocale"; ofType: null };
        };
        meta: {
          name: "meta";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritMeta"; ofType: null };
          };
        };
        pages: {
          name: "pages";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritPages"; ofType: null };
          };
        };
        parent: { name: "parent"; type: { kind: "INTERFACE"; name: "Node"; ofType: null } };
        seoRouteList: {
          name: "seoRouteList";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: { kind: "OBJECT"; name: "FirstSpiritSeoRouteList"; ofType: null };
            };
          };
        };
        structure: {
          name: "structure";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: { kind: "OBJECT"; name: "FirstSpiritStructureItem"; ofType: null };
            };
          };
        };
        updatedAt: {
          name: "updatedAt";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritNavigationDataConnection: {
      kind: "OBJECT";
      name: "FirstSpiritNavigationDataConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritNavigationDataEdge"; ofType: null };
              };
            };
          };
        };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: {
                  kind: "OBJECT";
                  name: "FirstSpiritNavigationDataGroupConnection";
                  ofType: null;
                };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritNavigationData"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritNavigationDataEdge: {
      kind: "OBJECT";
      name: "FirstSpiritNavigationDataEdge";
      fields: {
        next: {
          name: "next";
          type: { kind: "OBJECT"; name: "FirstSpiritNavigationData"; ofType: null };
        };
        node: {
          name: "node";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritNavigationData"; ofType: null };
          };
        };
        previous: {
          name: "previous";
          type: { kind: "OBJECT"; name: "FirstSpiritNavigationData"; ofType: null };
        };
      };
    };
    FirstSpiritNavigationDataFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritNavigationDataFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "idList";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritNavigationItemFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "pages";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPagesFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "seoRouteList";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritSeoRouteListFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "structure";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritStructureItemFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritMetaFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "locale";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritMasterLocaleFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "changeInfo";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritChangeInfoFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritNavigationDataFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFieldSelector"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritNavigationDataFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritNavigationDataFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "idList";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritNavigationItemFilterInput";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "pages";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPagesFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "seoRouteList";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSeoRouteListFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "structure";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritStructureItemFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritMetaFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "locale";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritMasterLocaleFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "changeInfo";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritChangeInfoFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritNavigationDataFilterInput";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritNavigationDataFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritNavigationDataFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritNavigationDataFilterInput";
            ofType: null;
          };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritNavigationDataGroupConnection: {
      kind: "OBJECT";
      name: "FirstSpiritNavigationDataGroupConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritNavigationDataEdge"; ofType: null };
              };
            };
          };
        };
        field: {
          name: "field";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        fieldValue: { name: "fieldValue"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: {
                  kind: "OBJECT";
                  name: "FirstSpiritNavigationDataGroupConnection";
                  ofType: null;
                };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritNavigationData"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritNavigationDataSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritNavigationDataSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "idList";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritNavigationItemSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "pages";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPagesSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "seoRouteList";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSeoRouteListSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "structure";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritStructureItemSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritMetaSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "locale";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritMasterLocaleSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "changeInfo";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritChangeInfoSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritNavigationDataSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritNavigationItem: {
      kind: "OBJECT";
      name: "FirstSpiritNavigationItem";
      fields: {
        caasDocumentId: {
          name: "caasDocumentId";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        contentReference: {
          name: "contentReference";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        customData: { name: "customData"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        fsNavItemId: {
          name: "fsNavItemId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        label: { name: "label"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        page: { name: "page"; type: { kind: "OBJECT"; name: "FirstSpiritPage"; ofType: null } };
        parentIds: {
          name: "parentIds";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: { kind: "SCALAR"; name: "String"; ofType: null };
            };
          };
        };
        permissions: {
          name: "permissions";
          type: { kind: "OBJECT"; name: "FirstSpiritPermission"; ofType: null };
        };
        seoRoute: { name: "seoRoute"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        seoRouteRegex: {
          name: "seoRouteRegex";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
    FirstSpiritNavigationItemFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritNavigationItemFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "fsNavItemId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parentIds";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "label";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "page";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "contentReference";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "caasDocumentId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "seoRoute";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "seoRouteRegex";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "customData";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "permissions";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPermissionFieldSelector"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritNavigationItemFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritNavigationItemFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsNavItemId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parentIds";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "label";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "page";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "contentReference";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "caasDocumentId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "seoRoute";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "seoRouteRegex";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "customData";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "permissions";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPermissionFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritNavigationItemFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritNavigationItemFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritNavigationItemFilterInput";
            ofType: null;
          };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritNavigationItemSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritNavigationItemSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsNavItemId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parentIds";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "label";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "page";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "contentReference";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "caasDocumentId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "seoRoute";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "seoRouteRegex";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "customData";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "permissions";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPermissionSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPage: {
      kind: "OBJECT";
      name: "FirstSpiritPage";
      fields: {
        _locale: { name: "_locale"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        _objectId: {
          name: "_objectId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        _translations: {
          name: "_translations";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritPage"; ofType: null };
          };
        };
        children: {
          name: "children";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "INTERFACE"; name: "Node"; ofType: null };
              };
            };
          };
        };
        data: {
          name: "data";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
        };
        fsId: {
          name: "fsId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        id: {
          name: "id";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
          };
        };
        internal: {
          name: "internal";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "Internal"; ofType: null };
          };
        };
        layout: {
          name: "layout";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        meta: {
          name: "meta";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
        };
        metaPageRefs: {
          name: "metaPageRefs";
          type: { kind: "SCALAR"; name: "JSON"; ofType: null };
        };
        name: {
          name: "name";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        pageBodies: {
          name: "pageBodies";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritPageBody"; ofType: null };
          };
        };
        parent: { name: "parent"; type: { kind: "INTERFACE"; name: "Node"; ofType: null } };
        previewId: {
          name: "previewId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        refId: {
          name: "refId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        remoteProjectId: {
          name: "remoteProjectId";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        route: { name: "route"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        updatedAt: {
          name: "updatedAt";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritPageBody: {
      kind: "OBJECT";
      name: "FirstSpiritPageBody";
      fields: {
        children: {
          name: "children";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
        };
        name: {
          name: "name";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        previewId: {
          name: "previewId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritPageBodyFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPageBodyFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "name";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPageBodyFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPageBodyFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "name";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPageBodyFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPageBodyFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageBodyFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPageBodySortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPageBodySortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "name";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPageConnection: {
      kind: "OBJECT";
      name: "FirstSpiritPageConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritPageEdge"; ofType: null };
              };
            };
          };
        };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritPageGroupConnection"; ofType: null };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritPage"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritPageEdge: {
      kind: "OBJECT";
      name: "FirstSpiritPageEdge";
      fields: {
        next: { name: "next"; type: { kind: "OBJECT"; name: "FirstSpiritPage"; ofType: null } };
        node: {
          name: "node";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritPage"; ofType: null };
          };
        };
        previous: {
          name: "previous";
          type: { kind: "OBJECT"; name: "FirstSpiritPage"; ofType: null };
        };
      };
    };
    FirstSpiritPageFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPageFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "refId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "name";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "layout";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "pageBodies";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageBodyFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "metaPageRefs";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "route";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFieldSelector"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPageFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPageFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "refId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "name";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "layout";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "pageBodies";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageBodyFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "metaPageRefs";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "route";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPageFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPageFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPageGroupConnection: {
      kind: "OBJECT";
      name: "FirstSpiritPageGroupConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritPageEdge"; ofType: null };
              };
            };
          };
        };
        field: {
          name: "field";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        fieldValue: { name: "fieldValue"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritPageGroupConnection"; ofType: null };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritPage"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritPageSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPageSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "refId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "name";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "layout";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "pageBodies";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageBodySortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "metaPageRefs";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "route";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritPageSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPages: {
      kind: "OBJECT";
      name: "FirstSpiritPages";
      fields: {
        index: {
          name: "index";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritPagesFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPagesFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "index";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPagesFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPagesFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "index";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPagesSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPagesSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "index";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPermission: {
      kind: "OBJECT";
      name: "FirstSpiritPermission";
      fields: {
        allowed: {
          name: "allowed";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        denied: {
          name: "denied";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritPermissionFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPermissionFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "allowed";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "denied";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPermissionFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPermissionFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "allowed";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "denied";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritPermissionSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritPermissionSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "allowed";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "denied";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritProjectProperties: {
      kind: "OBJECT";
      name: "FirstSpiritProjectProperties";
      fields: {
        _locale: { name: "_locale"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        _objectId: {
          name: "_objectId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        _translations: {
          name: "_translations";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritProjectProperties"; ofType: null };
          };
        };
        children: {
          name: "children";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "INTERFACE"; name: "Node"; ofType: null };
              };
            };
          };
        };
        data: {
          name: "data";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
        };
        fsChildren: {
          name: "fsChildren";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        fsId: {
          name: "fsId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        id: {
          name: "id";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
          };
        };
        internal: {
          name: "internal";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "Internal"; ofType: null };
          };
        };
        layout: {
          name: "layout";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        masterLocale: {
          name: "masterLocale";
          type: { kind: "OBJECT"; name: "FirstSpiritMasterLocale"; ofType: null };
        };
        meta: {
          name: "meta";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
        };
        name: {
          name: "name";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        parent: { name: "parent"; type: { kind: "INTERFACE"; name: "Node"; ofType: null } };
        previewId: {
          name: "previewId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        remoteProjectId: {
          name: "remoteProjectId";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        updatedAt: {
          name: "updatedAt";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritProjectPropertiesConnection: {
      kind: "OBJECT";
      name: "FirstSpiritProjectPropertiesConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritProjectPropertiesEdge"; ofType: null };
              };
            };
          };
        };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: {
                  kind: "OBJECT";
                  name: "FirstSpiritProjectPropertiesGroupConnection";
                  ofType: null;
                };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritProjectProperties"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritProjectPropertiesEdge: {
      kind: "OBJECT";
      name: "FirstSpiritProjectPropertiesEdge";
      fields: {
        next: {
          name: "next";
          type: { kind: "OBJECT"; name: "FirstSpiritProjectProperties"; ofType: null };
        };
        node: {
          name: "node";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritProjectProperties"; ofType: null };
          };
        };
        previous: {
          name: "previous";
          type: { kind: "OBJECT"; name: "FirstSpiritProjectProperties"; ofType: null };
        };
      };
    };
    FirstSpiritProjectPropertiesFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritProjectPropertiesFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "fsChildren";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "name";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "layout";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "masterLocale";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritMasterLocaleFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritProjectPropertiesFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFieldSelector"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritProjectPropertiesFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritProjectPropertiesFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "fsChildren";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "name";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "layout";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "masterLocale";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritMasterLocaleFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritProjectPropertiesFilterInput";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritProjectPropertiesFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritProjectPropertiesFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritProjectPropertiesFilterInput";
            ofType: null;
          };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritProjectPropertiesGroupConnection: {
      kind: "OBJECT";
      name: "FirstSpiritProjectPropertiesGroupConnection";
      fields: {
        distinct: {
          name: "distinct";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "SCALAR"; name: "String"; ofType: null };
              };
            };
          };
        };
        edges: {
          name: "edges";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritProjectPropertiesEdge"; ofType: null };
              };
            };
          };
        };
        field: {
          name: "field";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        fieldValue: { name: "fieldValue"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        group: {
          name: "group";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: {
                  kind: "OBJECT";
                  name: "FirstSpiritProjectPropertiesGroupConnection";
                  ofType: null;
                };
              };
            };
          };
        };
        max: { name: "max"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        min: { name: "min"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        nodes: {
          name: "nodes";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "FirstSpiritProjectProperties"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
        sum: { name: "sum"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    FirstSpiritProjectPropertiesSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritProjectPropertiesSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "fsChildren";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "name";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "layout";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "meta";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "remoteProjectId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "masterLocale";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritMasterLocaleSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "updatedAt";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_objectId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_locale";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "_translations";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritProjectPropertiesSortInput";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritSection: {
      kind: "OBJECT";
      name: "FirstSpiritSection";
      fields: {
        children: {
          name: "children";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritSection"; ofType: null };
          };
        };
        data: {
          name: "data";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
        };
        displayName: {
          name: "displayName";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        lifespan: {
          name: "lifespan";
          type: { kind: "OBJECT"; name: "FirstSpiritLifespan"; ofType: null };
        };
        name: { name: "name"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        previewId: {
          name: "previewId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        sectionType: {
          name: "sectionType";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritSectionFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritSectionFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "name";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "displayName";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "sectionType";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "lifespan";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritLifespanFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSectionFieldSelector"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritSectionFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritSectionFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "name";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "displayName";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "sectionType";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "INPUT_OBJECT"; name: "JSONQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "lifespan";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritLifespanFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSectionFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritSectionFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritSectionFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSectionFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritSectionSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritSectionSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "name";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "displayName";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "previewId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "sectionType";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "data";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "lifespan";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritLifespanSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSectionSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritSeoRouteList: {
      kind: "OBJECT";
      name: "FirstSpiritSeoRouteList";
      fields: {
        route: {
          name: "route";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    FirstSpiritSeoRouteListFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritSeoRouteListFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "route";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritSeoRouteListFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritSeoRouteListFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "route";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritSeoRouteListFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritSeoRouteListFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritSeoRouteListFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritSeoRouteListSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritSeoRouteListSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "route";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritStructureItem: {
      kind: "OBJECT";
      name: "FirstSpiritStructureItem";
      fields: {
        fsStructureItemId: {
          name: "fsStructureItemId";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        navigationItem: {
          name: "navigationItem";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritNavigationItem"; ofType: null };
          };
        };
        structureChildren: {
          name: "structureChildren";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: { kind: "OBJECT"; name: "FirstSpiritStructureItem"; ofType: null };
            };
          };
        };
      };
    };
    FirstSpiritStructureItemFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritStructureItemFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "fsStructureItemId";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "structureChildren";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritStructureItemFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
        {
          name: "navigationItem";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritNavigationItemFieldSelector";
            ofType: null;
          };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritStructureItemFilterInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritStructureItemFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsStructureItemId";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "structureChildren";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritStructureItemFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "navigationItem";
          type: {
            kind: "INPUT_OBJECT";
            name: "FirstSpiritNavigationItemFilterInput";
            ofType: null;
          };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritStructureItemFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritStructureItemFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritStructureItemFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    FirstSpiritStructureItemSortInput: {
      kind: "INPUT_OBJECT";
      name: "FirstSpiritStructureItemSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "fsStructureItemId";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "structureChildren";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritStructureItemSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "navigationItem";
          type: { kind: "INPUT_OBJECT"; name: "FirstSpiritNavigationItemSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    Float: unknown;
    ID: unknown;
    Int: unknown;
    IntQueryOperatorInput: {
      kind: "INPUT_OBJECT";
      name: "IntQueryOperatorInput";
      isOneOf: false;
      inputFields: [
        { name: "eq"; type: { kind: "SCALAR"; name: "Int"; ofType: null }; defaultValue: null },
        { name: "ne"; type: { kind: "SCALAR"; name: "Int"; ofType: null }; defaultValue: null },
        { name: "gt"; type: { kind: "SCALAR"; name: "Int"; ofType: null }; defaultValue: null },
        { name: "gte"; type: { kind: "SCALAR"; name: "Int"; ofType: null }; defaultValue: null },
        { name: "lt"; type: { kind: "SCALAR"; name: "Int"; ofType: null }; defaultValue: null },
        { name: "lte"; type: { kind: "SCALAR"; name: "Int"; ofType: null }; defaultValue: null },
        {
          name: "in";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
          defaultValue: null;
        },
        {
          name: "nin";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
          defaultValue: null;
        },
      ];
    };
    Internal: {
      kind: "OBJECT";
      name: "Internal";
      fields: {
        content: { name: "content"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        contentDigest: {
          name: "contentDigest";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        contentFilePath: {
          name: "contentFilePath";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        description: {
          name: "description";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        fieldOwners: {
          name: "fieldOwners";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        ignoreType: { name: "ignoreType"; type: { kind: "SCALAR"; name: "Boolean"; ofType: null } };
        mediaType: { name: "mediaType"; type: { kind: "SCALAR"; name: "String"; ofType: null } };
        owner: {
          name: "owner";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        type: {
          name: "type";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
      };
    };
    InternalFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "InternalFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "content";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "contentDigest";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "description";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "fieldOwners";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "ignoreType";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "mediaType";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "owner";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "type";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "contentFilePath";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    InternalFilterInput: {
      kind: "INPUT_OBJECT";
      name: "InternalFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "content";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "contentDigest";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "description";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "fieldOwners";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "ignoreType";
          type: { kind: "INPUT_OBJECT"; name: "BooleanQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "mediaType";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "owner";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "type";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "contentFilePath";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    InternalSortInput: {
      kind: "INPUT_OBJECT";
      name: "InternalSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "content";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "contentDigest";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "description";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "fieldOwners";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "ignoreType";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "mediaType";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "owner";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "type";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "contentFilePath";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    JSON: unknown;
    JSONQueryOperatorInput: {
      kind: "INPUT_OBJECT";
      name: "JSONQueryOperatorInput";
      isOneOf: false;
      inputFields: [
        { name: "eq"; type: { kind: "SCALAR"; name: "JSON"; ofType: null }; defaultValue: null },
        { name: "ne"; type: { kind: "SCALAR"; name: "JSON"; ofType: null }; defaultValue: null },
        {
          name: "in";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
          defaultValue: null;
        },
        {
          name: "nin";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
          };
          defaultValue: null;
        },
        { name: "regex"; type: { kind: "SCALAR"; name: "JSON"; ofType: null }; defaultValue: null },
        { name: "glob"; type: { kind: "SCALAR"; name: "JSON"; ofType: null }; defaultValue: null },
      ];
    };
    Node: {
      kind: "INTERFACE";
      name: "Node";
      fields: {
        children: {
          name: "children";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "INTERFACE"; name: "Node"; ofType: null };
              };
            };
          };
        };
        id: {
          name: "id";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
          };
        };
        internal: {
          name: "internal";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "Internal"; ofType: null };
          };
        };
        parent: { name: "parent"; type: { kind: "INTERFACE"; name: "Node"; ofType: null } };
      };
      possibleTypes:
        | "FirstSpiritDataset"
        | "FirstSpiritGcaPage"
        | "FirstSpiritNavigationData"
        | "FirstSpiritPage"
        | "FirstSpiritProjectProperties";
    };
    NodeFieldSelector: {
      kind: "INPUT_OBJECT";
      name: "NodeFieldSelector";
      isOneOf: false;
      inputFields: [
        {
          name: "id";
          type: { kind: "ENUM"; name: "FieldSelectorEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFieldSelector"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFieldSelector"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    NodeFilterInput: {
      kind: "INPUT_OBJECT";
      name: "NodeFilterInput";
      isOneOf: false;
      inputFields: [
        {
          name: "id";
          type: { kind: "INPUT_OBJECT"; name: "StringQueryOperatorInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    NodeFilterListInput: {
      kind: "INPUT_OBJECT";
      name: "NodeFilterListInput";
      isOneOf: false;
      inputFields: [
        {
          name: "elemMatch";
          type: { kind: "INPUT_OBJECT"; name: "NodeFilterInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    NodeSortInput: {
      kind: "INPUT_OBJECT";
      name: "NodeSortInput";
      isOneOf: false;
      inputFields: [
        {
          name: "id";
          type: { kind: "ENUM"; name: "SortOrderEnum"; ofType: null };
          defaultValue: null;
        },
        {
          name: "parent";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "children";
          type: { kind: "INPUT_OBJECT"; name: "NodeSortInput"; ofType: null };
          defaultValue: null;
        },
        {
          name: "internal";
          type: { kind: "INPUT_OBJECT"; name: "InternalSortInput"; ofType: null };
          defaultValue: null;
        },
      ];
    };
    PageInfo: {
      kind: "OBJECT";
      name: "PageInfo";
      fields: {
        currentPage: {
          name: "currentPage";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        hasNextPage: {
          name: "hasNextPage";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
          };
        };
        hasPreviousPage: {
          name: "hasPreviousPage";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
          };
        };
        itemCount: {
          name: "itemCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        pageCount: {
          name: "pageCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        perPage: { name: "perPage"; type: { kind: "SCALAR"; name: "Int"; ofType: null } };
        totalCount: {
          name: "totalCount";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
      };
    };
    Query: {
      kind: "OBJECT";
      name: "Query";
      fields: {
        allFirstSpiritDataset: {
          name: "allFirstSpiritDataset";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritDatasetConnection"; ofType: null };
          };
        };
        allFirstSpiritGcaPage: {
          name: "allFirstSpiritGcaPage";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritGcaPageConnection"; ofType: null };
          };
        };
        allFirstSpiritNavigationData: {
          name: "allFirstSpiritNavigationData";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritNavigationDataConnection"; ofType: null };
          };
        };
        allFirstSpiritPage: {
          name: "allFirstSpiritPage";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "FirstSpiritPageConnection"; ofType: null };
          };
        };
        allFirstSpiritProjectProperties: {
          name: "allFirstSpiritProjectProperties";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "OBJECT";
              name: "FirstSpiritProjectPropertiesConnection";
              ofType: null;
            };
          };
        };
        firstSpiritDataset: {
          name: "firstSpiritDataset";
          type: { kind: "OBJECT"; name: "FirstSpiritDataset"; ofType: null };
        };
        firstSpiritGcaPage: {
          name: "firstSpiritGcaPage";
          type: { kind: "OBJECT"; name: "FirstSpiritGcaPage"; ofType: null };
        };
        firstSpiritNavigationData: {
          name: "firstSpiritNavigationData";
          type: { kind: "OBJECT"; name: "FirstSpiritNavigationData"; ofType: null };
        };
        firstSpiritPage: {
          name: "firstSpiritPage";
          type: { kind: "OBJECT"; name: "FirstSpiritPage"; ofType: null };
        };
        firstSpiritProjectProperties: {
          name: "firstSpiritProjectProperties";
          type: { kind: "OBJECT"; name: "FirstSpiritProjectProperties"; ofType: null };
        };
      };
    };
    SortOrderEnum: { name: "SortOrderEnum"; enumValues: "ASC" | "DESC" };
    String: unknown;
    StringQueryOperatorInput: {
      kind: "INPUT_OBJECT";
      name: "StringQueryOperatorInput";
      isOneOf: false;
      inputFields: [
        { name: "eq"; type: { kind: "SCALAR"; name: "String"; ofType: null }; defaultValue: null },
        { name: "ne"; type: { kind: "SCALAR"; name: "String"; ofType: null }; defaultValue: null },
        {
          name: "in";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
          defaultValue: null;
        },
        {
          name: "nin";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
          defaultValue: null;
        },
        {
          name: "regex";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
        {
          name: "glob";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
      ];
    };
  };
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
  interface setupSchema {
    introspection: introspection;
  }
}
