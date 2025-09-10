import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

import api from "..";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";

type ApiEndpointBuilder = EndpointBuilder<
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
  >,
  never,
  typeof api.reducerPath
>;

export type { ApiEndpointBuilder };
