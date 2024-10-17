// "use client";

// import { PERSONNE_QUERY } from "@queries/personne";
// import { useNavigation } from "@refinedev/core";
// import { useForm } from "@refinedev/react-hook-form";
// import { FieldError } from "react-hook-form";
// import { Textarea } from "@components/ui/textarea";

// export default function PersonneCreate() {
//   const { list } = useNavigation();

//   const {
//     refineCore: { onFinish },
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     refineCoreProps: {
//       meta: {
//         fields: PERSONNE_QUERY,
//       },
//     },
//   });

//   return (
//     <div style={{ padding: "16px" }}>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <h1>Create</h1>
//         <div>
//           <button
//             onClick={() => {
//               list("personnes");
//             }}
//           >
//             List
//           </button>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit(onFinish)}>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "8px",
//           }}
//         >
//           <label>
//           {/*
//             <span style={{ marginRight: "8px" }}>Nom</span>
//              <input
//               type="text"
//               {...register("nom", {
//                 required: "This field is required",
//               })}
//             /> */}
//             <TextAreaForm />
//             <span style={{ color: "red" }}>
//               {errors.nom?.message as string}
//             </span>
//           </label>

//           <label>
//             <span style={{ marginRight: "8px" }}>Prenom</span>
//             <input
//               type="text"
//               {...register("prenom", {
//                 required: "This field is required",
//               })}
//             />
//             <span style={{ color: "red" }}>
//               {errors.prenom?.message  as string}
//             </span>
//           </label>

//           <label>
//             <span style={{ marginRight: "8px" }}>Age</span>
//             <input
//               type="number" // Change to number for age
//               {...register("age", {
//                 required: "This field is required",
//                 min: { value: 0, message: "Age must be a positive number" }, // Validation for age
//               })}
//             />
//             <span style={{ color: "red" }}>
//               {errors.age?.message as string}
//             </span>
//           </label>

//           <div>
//             <input type="submit" value={"Save"} />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
"use client";

import { PERSONNE_QUERY } from "@queries/personne";
import { useNavigation } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldError } from "react-hook-form";
import TextAreaForm from "@components/TextAreaForm";
import { Button } from "@components/ui/button";

export default function PersonneCreate() {
  const { list } = useNavigation();

  const {
    refineCore: { onFinish },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    refineCoreProps: {
      meta: {
        fields: PERSONNE_QUERY,
      },
    },
  });

  return (
    <div style={{ padding: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 className="text-3xl" >Ajout d'un personne</h1> 
        <div>
          <button onClick={() => { list("personnes"); }} className="bg-cyan-400 hover:bg-cyan-100 text-white w-24 rounded-xl">
            Retour
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onFinish)}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <TextAreaForm
            register={register}
            errors={errors}
            name="nom"
            label="Nom"
          />

          <TextAreaForm
            register={register}
            errors={errors}
            name="prenom"
            label="Prenom"
          />

          <TextAreaForm
            register={register}
            errors={errors}
            name="age"
            label="Age"
          />

          <Button className="bg-gray-800 hover:bg-gray-400 text-white w-24">
            Enregistrer
          </Button>
        </div>
      </form>
    </div>
  );
}