// "use client";

// import React from "react";
// import { useList } from "@refinedev/core"; // Importer le hook useList de Refine
// import Component from "./chart";
// // import { GraphQLClient } from "@refinedev/graphql";
// import { gql } from "graphql-request";

// // Définir l'URL de votre API GraphQL
// const apiUrl = 'http://localhost:8080/v1/graphql';

// // Créer un client GraphQL
// const client = new GraphQLClient(apiUrl, {
//     headers: {
//         'Content-Type': 'application/json',
//         'x-hasura-admin-secret': 'myadminsecretkey',
//     },
// });

// // Définir la requête GraphQL
// const GET_PERSONNE_QUERY = gql`
//     query MyQuery {
//         personne {
//             age
//             nom
//         }
//     }
// `;

// export default function Tableau() {
//     // Utiliser le hook useList pour récupérer les données
//     const { data, isLoading, error } = useList({
//         resource: "personne", // Nom du resource correspondant à votre requête GraphQL
//         meta: {
//             gqlQuery: GET_PERSONNE_QUERY,
//         },
//     });

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div>
//             <h1>Données Personne</h1>
//             <div>
//                 {/* Passer les données au composant Chart */}
//                 <Chart data={data?.data} />
//             </div>
//         </div>
//     );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import Chart from "./chart"
// export default function tableau(){
//     const [data, setData] = useState();
//     useEffect(() => {
//         const fetchData = async () => {
//             const Api = await fetch('http://localhost:8080/v1/graphql', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'x-hasura-admin-secret': 'myadminsecretkey',
//             },
//             body: JSON.stringify({
//                 query: `
//                     query MyQuery {
//                         personne {
//                             age
//                             nom
//                         }
//                     }`,
//                 }),
//             });
//             const resultat = await Api.json();
//             console.log(resultat);
//             if (resultat.data && resultat.data.personne) {
//                 setData(resultat.data.personne);}
//             else {
//                 console.error("personne data not found in response", resultat);
//             }
//     };
//     fetchData();},[]);
//     return(
//         <div>
//             <h1>
//                 gjkgj
//             </h1>
//             <div><Chart data = {data}/></div>
//         </div>
//     );
// }

"use client";

import React, { useEffect, useState } from "react";
import Chartme from "./chartss";

interface Personne {
    age: number;
    nom: string;
}

export default function Tableau() {
    const [data, setData] = useState<Personne[]>([]); // Initialiser data avec un tableau vide
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8088/v1/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-hasura-admin-secret': 'myadminsecretkey',
                    },
                    body: JSON.stringify({
                        query: `
                            query MyQuery {
                                personne {
                                    age
                                    nom
                                }
                            }`,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const resultat = await response.json();
                console.log(resultat);

                if (resultat.data && resultat.data.personne) {
                    setData(resultat.data.personne);
                } else {
                    throw new Error("Personne data not found in response");
                }
            } catch (err) {
                // Vérification du type d'erreur
                if (err instanceof Error) {
                    console.error("Error fetching data:", err.message);
                    setError(err.message);
                } else {
                    // Gérer les erreurs qui ne sont pas des instances d'Error
                    console.error("Unexpected error:", err);
                    setError("An unexpected error occurred.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Données Personne</h1>
            <div>
                <Chartme data={data} /> data est maintenant toujours un tableau
            </div>
        </div>
    );
}