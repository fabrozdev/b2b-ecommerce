import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    timeout: 6000,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: () => ({}),
});

export default api;
