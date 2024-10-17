import { gql } from "graphql-tag";

// declaration de toutes les champs dans le table personne
export const PERSONNE_QUERY = ["id", "nom", "prenom", "age"];

// Requête pour récupérer une personne par ID 
export const PERSONNE_QUERY1 = gql`query Getpersonne($id: Int!) {
    personne_by_pk(id: $id) {
      id
      nom
      prenom
      age
    }
  }`;

  // Mutation pour créer une personne
export const PERSONNE_CREATE_MUTATION = gql`
    mutation CreatePersonne($object: personne_insert_input!) {
        insert_personne_one(object: $object) {
            id
        }
    }
`;

// Mutation pour mettre à jour une personne
export const PERSONNE_UPDATE_MUTATION = gql`
    mutation Updatepersonne($id: Int!, $object: personne_set_input!) {
        update_personne_by_pk(pk_columns: { id: $id }, _set: $object) {
            id
            nom
            prenom
            age
        }
    }
`;

export const PERSONNE_SHOW = gql`
    query personne($id: Int!){
        personne_by_pk(id: $id){
            id
            nom
            prenom
            age
        }
    }`;

    // Mutation pour supprimer une personne
export const PERSONNE_DELETE = gql`
mutation Deletepersonne($id: Int!) {
  delete_personne_by_pk(id: $id) {
    id
  }
}`;
