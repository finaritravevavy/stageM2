"use client";

import dataProviderHasura, { GraphQLClient } from "@refinedev/hasura";

const API_URL = "http://localhost:8088/v1/graphql"; 

export const client = new GraphQLClient(API_URL, {
  headers: {
    "x-hasura-admin-secret": "myadminsecretkey",
  },
});

export const dataProvider = dataProviderHasura(client);
