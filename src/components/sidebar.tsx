'use client';

import { RefineKbarProvider } from "@refinedev/kbar";
import { AreaChart } from "recharts";

export default function Sidebar({ resources }: { resources: any[] }) {
    return (
        <RefineKbarProvider>
            <div className="flex flex-col w-[100px] min-w-[200px] border-r min-h-screen p-4 bg">
                <ul>
                    {resources.map((resource) => (
                        <li key={resource.name}>
                            <a href={resource.list}>{resource.name}</a>
                        </li>
                    ))}
                </ul> 
            </div>
        </RefineKbarProvider>
    );
}
