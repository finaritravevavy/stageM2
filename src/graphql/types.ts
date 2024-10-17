import type * as Types from "./schema.types";

export type GetpersonneQuery = {
    personne: Array<
      Pick<
        Types.personne,
        "id" | "nom" | "prenom" | "age" 
      > 
    >;
    personne_aggregate: {
      aggregate?: Types.Maybe<Pick<Types.personne_Aggregate_Fields, "count">>;
    };
  };

export type Getpersonne = {
personne_by_pk: Types.Maybe<
    Pick<Types.personne, "id" | "nom" | "prenom" | "age"> 
>;
};

export type GetpersonneQueryVariables = Types.Exact<{
offset: Types.Scalars["Int"]["input"];
limit: Types.Scalars["Int"]["input"];
order_by?: Types.InputMaybe<
    Array<Types.personne_Order_By> | Types.personne_Order_By
>;
where?: Types.InputMaybe<Types.personne_Bool_Exp>;
}>;

export type UpdatepersonneMutation = {
update_personne_by_pk?: Types.Maybe<
    Pick<Types.personne, "id" | "nom" | "prenom" | "age" >>;
    };

export type UpdatepersonneMutationVariables = Types.Exact<{
    id: Types.Scalars["Int"]["input"];
    object: Types.personne_Set_Input;
    }>;

export type DeletepersonneMutationVariables = Types.Exact<{
  id: Types.Scalars["Int"]["input"];
}>;

export type DeletepersonneMutation = {
  delete_personne_by_pk?: Types.Maybe<
    Pick<Types.personne, "id" > 
  >;
};