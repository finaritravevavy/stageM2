// "use client";

// import { PERSONNE_QUERY, PERSONNE_SHOW } from "@queries/personne";
// import { Show, TextField } from "@refinedev/antd";
// import { useShow } from "@refinedev/core";
// import { Typography } from "antd";
// import { GetFields } from "@refinedev/hasura";
// import { Getpersonne } from "@graphql/types";
// import gql from "graphql-tag";

// const { Title } = Typography;

// export default function PersonneShow() {
//   const { queryResult } = useShow<GetFields<Getpersonne>>({
//     metaData: {
//        gqlQuery: PERSONNE_SHOW,
//       },
//   });
//   const { data, isLoading } = queryResult;

//   const record = data?.data;

//   return (
//     <Show isLoading={isLoading}>
//       <Title level={5}>{"ID"}</Title>
//       <TextField value={record?.id} />
//       <Title level={5}>{"Nom"}</Title>
//       <TextField value={record?.nom} />
//       <Title level={5}>{"Prenom"}</Title>
//       <TextField value={record?.prenom} />
//       <Title level={5}>{"Age"}</Title>
//       <TextField value={record?.age} />
//     </Show>
//   );
// }

"use client";

import { PERSONNE_QUERY, PERSONNE_SHOW } from "@queries/personne";
import { useNavigation, useResource, useShow } from "@refinedev/core";

export default function PersonneShow() {
  const { edit, list } = useNavigation();
  const { id } = useResource();
  const { queryResult } = useShow({
    meta: {
      sqlQuery: PERSONNE_SHOW,
    },
  });
  const { data } = queryResult;

  const record = data?.data;

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>{"Show"}</h1>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => list("personne")}>{"List"}</button>
          <button onClick={() => edit("personne", id ?? "")}>{"Edit"}</button>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "6px" }}>
          <h5>{"ID"}</h5>
          <div>{record?.id ?? ""}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>{"Nom"}</h5>
          <div>{record?.nom}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>{"Prenom"}</h5>
          <p>{record?.prenom}</p>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>{"Age"}</h5>
          <p>{record?.age}</p>
        </div>
      </div>
    </div>
  );
}

