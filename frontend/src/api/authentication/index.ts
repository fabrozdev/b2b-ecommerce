import api from "@/api";
import { ApiEndpointBuilder } from "@/api/types/api.ts";
import { HttpMethod } from "@/api/types/httpMethod.ts";

const login = (builder: ApiEndpointBuilder) =>
  builder.mutation({
    query: (credentials: any) => ({
      url: "/auth/login",
      method: HttpMethod.POST,
      body: { ...credentials },
    }),
  });

const authenticationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: login(builder),
  }),
});

export const { useLoginMutation } = authenticationApi;
