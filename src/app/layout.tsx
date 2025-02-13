// import { DevtoolsProvider } from "@providers/devtools";
// import { GitHubBanner, Refine } from "@refinedev/core";
// import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
// import routerProvider from "@refinedev/nextjs-router";
// import { Metadata } from "next";
// import React, { Suspense } from "react";

// import { dataProvider } from "@providers/data-provider";
// import "@styles/global.css";
// import PersonneCreate from "./personne/create/page";
// import PersonneList from "./personne/page";
// import PersonneEdit from "./personne/edit/[id]/page";
// import PersonneShow from "./personne/show/[id]/page";
// import Sidebar from "@components/sidebar";
// import Link from "next/link";


// export const metadata: Metadata = {
//   title: "Refine",
//   description: "Generated by create refine app",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };


                              // export default function RootLayout({
                              //   children,
                              // }: Readonly<{
                              //   children: React.ReactNode;
                              // }>) {
                              //   const resources = [
                              //     {
                              //       name: "personne",
                              //       list: "/personne",
                              //       create: "/personne/create",
                              //       edit: "/personne/edit/:id",
                              //       show: "/personne/show/:id",
                              //       meta: {
                              //         canDelete: true,
                              //       },
                              //     },
                              //     {
                              //       name: "dash_bord",
                              //       list: "/dash_bord",
                              //     },
                              //     {
                              //       name: "rapport",
                              //       list: "/rapport",
                              //     },
                              //   ];

                              //   return (
                              //     <html lang="en">
                              //       <body>
                              //         <Suspense>
                              //           <div className="flex justify-start relative">
                              //             <div className="flex flex-col bg-black text-white font-bold h-screen px-10 py-10">
                              //               <Link href="/personne">Personnes</Link>
                              //               <Link href="/dash_bord">Dashboards</Link>
                              //               <Link href="/rapport">Rapports</Link>
                              //               <Link href="/personne">User</Link>
                              //             </div>

                              //             {/* code hicachena le sidebar par defaut */}
                              //             <div style={{backgroundColor:"white", position:"absolute", zIndex:1,top:0,left:190,width:200,height:170}}></div>
                                          
                              //             <div className="ml-8 w-full">
                              //               <RefineKbarProvider>
                              //                 <Refine
                              //                   routerProvider={routerProvider}
                              //                   dataProvider={dataProvider}
                              //                   resources={resources}
                              //                   options={{
                              //                     syncWithLocation: true,
                              //                     warnWhenUnsavedChanges: true,
                              //                     useNewQueryKeys: true,
                              //                     projectId: "bXcm0B-13GfX0-kusURQ",
                              //                   }}
                              //                 >
                              //                   {children}
                              //                   <RefineKbar />
                              //                 </Refine>
                              //               </RefineKbarProvider>
                              //             </div>
                              //           </div>
                              //         </Suspense>
                              //       </body>
                              //     </html>
                              //   );
                              // }



// ... 2EME EXEMPLE ...

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const resources = [
//         {
//       name: "personne",
//       list: "/personne",
//       create: "/personne/create",
//       edit: "/personne/edit/:id",
//       show: "/personne/show/:id",
//       meta: {
//         canDelete: true,
//       },
//     },
//     {
//       name: "dash_bord",
//       list: "/dash_bord",
//     },
//     {
//       name: "rapport",
//       list: "/rapport",
//     },
//   ];

//   return (
//     <html lang="en">
//       <body>
//         <Suspense>
//           <div className="flex h-screen">
//             {/* Sidebar personnalisée */}
//             <div className="w-64 bg-gray-800 text-white p-4">
//               <h1 className="text-2xl font-bold mb-6">Mon Application</h1>
//               <nav>
//                 <ul className="space-y-2">
//                   <li><Link href="/personne" className="block py-2 px-4 hover:bg-gray-700 rounded">Personnes</Link></li>
//                   <li><Link href="/dash_bord" className="block py-2 px-4 hover:bg-gray-700 rounded">Dashboards</Link></li>
//                   <li><Link href="/rapport" className="block py-2 px-4 hover:bg-gray-700 rounded">Rapports</Link></li>
//                 </ul>
//               </nav>
//             </div>
            
//             {/* Contenu principal */}
//             <div className="flex-1 overflow-auto">
//               <RefineKbarProvider>
//                 <Refine
//                   routerProvider={routerProvider}
//                   dataProvider={dataProvider}
//                   resources={resources}
//                   options={{
//                     syncWithLocation: true,
//                     warnWhenUnsavedChanges: true,
//                     useNewQueryKeys: true,
//                     projectId: "bXcm0B-13GfX0-kusURQ",
//                   }}
//                 >
//                   {children}
//                   <RefineKbar />
//                 </Refine>
//               </RefineKbarProvider>
//             </div>
//           </div>
//         </Suspense>
//       </body>
//     </html>
//   );
// }

import { Metadata } from "next";
import React, { Suspense } from "react";
import Link from "next/link";
import { RefineWrapper } from "@components/RefineWrapper";
import "@styles/global.css";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <div className="flex h-screen">
            {/* Custom Sidebar */}
            <div className="w-40 bg-gray-800 text-white p-4">
              <h1 className="text-2xl font-bold mb-6">Mon Application</h1>
              <nav>
                <ul className="space-y-2">
                  <li><Link href="/personne" className="block py-2 px-4 hover:bg-gray-700 rounded">Personnes</Link></li>
                  <li><Link href="/dash_bord" className="block py-2 px-4 hover:bg-gray-700 rounded">Dashboards</Link></li>
                  <li><Link href="/rapport" className="block py-2 px-4 hover:bg-gray-700 rounded">Rapports</Link></li>
                </ul>
              </nav>
            </div>
            
            {/* Main content */}
            <div className="flex-1 overflow-auto">
              <RefineWrapper>
                {children}
              </RefineWrapper>
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}