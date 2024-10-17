'use client'

import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { dataProvider } from "@providers/data-provider";

const BlankSidebar = () => null;

export function RefineWrapper({ children }: { children: React.ReactNode }) {
  const resources = [
    {
              name: "personne",
              list: "/personne",
              create: "/personne/create",
              edit: "/personne/edit/:id",
              show: "/personne/show/:id",
              meta: {
                canDelete: true,
              },
            },
            
  ];

  return (
    <RefineKbarProvider>
      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider}
        resources={resources}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
          useNewQueryKeys: true,
          projectId: "bXcm0B-13GfX0-kusURQ",
          disableTelemetry: true,
        }}
        Sider={BlankSidebar}
      >
        {children}
        <RefineKbar />
      </Refine>
    </RefineKbarProvider>
  );
}