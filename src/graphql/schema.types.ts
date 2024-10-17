export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  timestamptz: { input: any; output: any };
 
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type Order_By =
  /** in ascending order, nulls last */
  | "asc"
  /** in ascending order, nulls first */
  | "asc_nulls_first"
  /** in ascending order, nulls last */
  | "asc_nulls_last"
  /** in descending order, nulls first */
  | "desc"
  /** in descending order, nulls first */
  | "desc_nulls_first"
  /** in descending order, nulls last */
  | "desc_nulls_last";

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["Int"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["Int"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["Int"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["Int"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["Int"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["Int"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["Int"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["Int"]["input"]>;
};

export type personne = {
    id: Scalars["Int"]["output"];
    nom: Scalars["String"]["output"];
    prenom: Scalars["String"]["output"];
    age: Scalars["Int"]["output"];
  };

  export type personne_Aggregate_Fields = {
    count: Scalars["Int"]["output"];
    max?: Maybe<personne_Max_Fields>;
    min?: Maybe<personne_Min_Fields>;
  };

  export type personne_Max_Fields = {
    id: Maybe<Scalars["Int"]["output"]>;
    nom: Maybe<Scalars["String"]["output"]>;
    prenom: Maybe<Scalars["String"]["output"]>;
    age: Maybe<Scalars["Int"]["output"]>;
  };

  export type personne_Min_Fields = {
    id?: Maybe<Scalars["Int"]["output"]>;
    nom: Maybe<Scalars["String"]["output"]>;
    prenom: Maybe<Scalars["String"]["output"]>;
    age: Maybe<Scalars["Int"]["output"]>;
  };

  export type personne_Order_By = {
    id: InputMaybe<Order_By>;
    nom?: InputMaybe<Order_By>;
    prenom?: InputMaybe<Order_By>;
    age?: InputMaybe<Order_By>;
  };

  export type personne_Bool_Exp = {
    _and?: InputMaybe<Array<personne_Bool_Exp>>;
    _not?: InputMaybe<personne_Bool_Exp>;
    _or?: InputMaybe<Array<personne_Bool_Exp>>;
    
    id?: InputMaybe<Int_Comparison_Exp>;
    age?: InputMaybe<Int_Comparison_Exp>;
    nom?: InputMaybe<String_Comparison_Exp>;
    prenom?: InputMaybe<String_Comparison_Exp>;
  };

  export type personne_Set_Input = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
    nom?: InputMaybe<Scalars["String"]["input"]>;
    prenom?: InputMaybe<Scalars["String"]["input"]>;
    age?: InputMaybe<Scalars["Int"]["input"]>;
  };