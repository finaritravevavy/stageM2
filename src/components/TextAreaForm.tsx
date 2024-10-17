// "use client";

// import React from "react";
// import { useNavigation } from "@refinedev/core";
// import { useForm } from "@refinedev/react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { FieldValues } from "react-hook-form";

// // Définir le schéma de validation
// const formSchema = z.object({
//   nom: z.string().min(1, { message: "Ce champ est requis" }),
//   prenom: z.string().min(1, { message: "Ce champ est requis" }),
//   age: z.number().min(0, { message: "L'âge doit être un nombre positif" }),
// });

// type FormData = z.infer<typeof formSchema>;

// export default function PersonneCreate() {
//   const { list } = useNavigation();

//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       nom: "",
//       prenom: "",
//       age: 0,
//     },
//     refineCoreProps: {
//       resource: "personnes",
//       action: "create",
//     },
//   });

//   const {
//     refineCore: { onFinish, formLoading },
//     control,
//     handleSubmit,
//   } = form;

//   const onSubmit = (data: FieldValues) => {
//     onFinish(data as FormData);
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between mb-4">
//         <h1 className="text-2xl font-bold">Create Personne</h1>
//         <Button onClick={() => list("personnes")}>List</Button>
//       </div>
//       <Form {...form}>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <FormField
//             control={control}
//             name="nom"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Nom</FormLabel>
//                 <FormControl>
//                   <Textarea
//                     placeholder="Entrez votre nom ici."
//                     className="resize-none"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormDescription>Vous pouvez entrer votre nom ici.</FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={control}
//             name="prenom"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Prenom</FormLabel>
//                 <FormControl>
//                   <Input type="text" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={control}
//             name="age"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Age</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     {...field}
//                     onChange={(e) => field.onChange(Number(e.target.value))}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit" disabled={formLoading}>
//             {formLoading ? "Loading..." : "Save"}
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// }
// @components/TextAreaForm.tsx
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Textarea } from "@components/ui/textarea";

interface TextAreaFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  name: string;
  label: string;
}

const TextAreaForm: React.FC<TextAreaFormProps> = ({ register, errors, name, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Textarea
        id={name}
        {...register(name, {
          required: "Ce champ est requis",
        })}
        placeholder={`Entrez votre ${label.toLowerCase()} ici.`}
        className="resize-none"
      />
      {errors[name] && <span style={{ color: "red" }}>{errors[name]?.message as string}</span>}
    </div>
  );
};

export default TextAreaForm;