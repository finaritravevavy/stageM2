"use client";

import * as React from "react"
import { useMemo, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Area,
  AreaChart,
  Label, 
  Pie, 
  PieChart
} from 'recharts';

import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked area chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} as ChartConfig;

// Définir une interface pour les données
interface ChartData {
  nom: string;
  age: number;
}

interface ChartProps {
  data: ChartData[]; // Annotation de type pour les données
}

export default function Chartme({ data }: ChartProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Type explicite pour activeIndex

    //****************************** */
    const totalAge = useMemo(() => {
      return data.reduce((acc, curr) => acc + curr.age, 0)
    }, [data]);

    return (
      <>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4"> {/* Conteneur flex */}
            <div className="w-full md:w-1/2"> {/* Première moitié */} 
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nom" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="age" 
                    fill={activeIndex !== null ? "gold" : "red"} // Changer la couleur en fonction de l’index actif
                    onMouseEnter={(data, index) => setActiveIndex(index)} // Mettre à jour activeIndex au survol
                    onMouseLeave={() => setActiveIndex(null)} // Réinitialiser activeIndex en congé
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={activeIndex === index ? "gold" : "pink"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="w-full md:w-1/2"> {/* Deuxième moitié */}
              <Card>
                <CardHeader>
                  <CardTitle>Area Chart - Stacked</CardTitle>
                  <CardDescription>
                    Showing total visitors for the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig}>
                    <AreaChart
                      accessibilityLayer
                      data={data}
                      margin={{
                        left: 12,
                        right: 12,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="nom"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                      />
                      <Area
                        dataKey="age"
                        type="natural"
                        fill="var(--color-mobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 leading-none text-muted-foreground">
                        January - June 2024
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Pie Chart - Age Distribution</CardTitle>
            <CardDescription>Age distribution of persons</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={data}
                    dataKey="age"
                    nameKey="nom"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalAge.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Total Age
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Average age: {(totalAge / data.length).toFixed(2)}
            </div>
            <div className="leading-none text-muted-foreground">
               Affichage de la répartition par âge pour toutes les personnes
            </div>
          </CardFooter>
        </Card>
      </>
    );
}
 




// const ageConfig = {
//   "0-18": {
//     label: "0-18 ans",
//     color: "hsl(var(--chart-1))",
//   },
//   "19-30": {
//     label: "19-30 ans",
//     color: "hsl(var(--chart-2))",
//   },
//   "31-50": {
//     label: "31-50 ans",
//     color: "hsl(var(--chart-3))",
//   },
//   "51-70": {
//     label: "51-70 ans",
//     color: "hsl(var(--chart-4))",
//   },
//   "71+": {
//     label: "71 ans et plus",
//     color: "hsl(var(--chart-5))",
//   },
// } as const;

// type AgeRange = keyof typeof ageConfig;




// //****************************************copier */

// function getAgeRange(age: number): AgeRange {
//   if (age <= 18) return "0-18";
//   if (age <= 30) return "19-30";
//   if (age <= 50) return "31-50";
//   if (age <= 70) return "51-70";
//   return "71+";
// }


// export default function Chartme({ data }: ChartProps) {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const totalAge = useMemo(() => {
//     return data.reduce((acc, curr) => acc + curr.age, 0)
//   }, [data]);

//   const pieData = useMemo(() => {
//     return data.reduce((acc, curr) => {
//       const range = getAgeRange(curr.age);
//       if (!acc[range]) acc[range] = 0;
//       acc[range] += 1;
//       return acc;
//     }, {} as Record<AgeRange, number>);
//   }, [data]);

//   return (
//     <div className="flex flex-col gap-4">
//       {/* ... autres graphiques ... */}

//       <Card className="flex flex-col">
//         <CardHeader className="items-center pb-0">
//           <CardTitle>Pie Chart - Age Distribution</CardTitle>
//           <CardDescription>Age distribution of persons</CardDescription>
//         </CardHeader>
//         <CardContent className="flex-1 pb-0">
//           <ChartContainer
//             config={ageConfig}
//             className="mx-auto aspect-square max-h-[250px]"
//           >
//             <PieChart>
//               <ChartTooltip
//                 cursor={false}
//                 content={<ChartTooltipContent hideLabel />}
//               />
//               <Pie
//                 data={Object.entries(pieData).map(([range, value]) => ({ range, value }))}
//                 dataKey="value"
//                 nameKey="range"
//                 innerRadius={60}
//                 strokeWidth={5}
//               >
//                 {Object.entries(pieData).map(([range, _], index) => (
//                   <Cell key={`cell-${index}`} fill={ageConfig[range as AgeRange].color} />
//                 ))}
//                 <Label
//                   content={({ viewBox }) => {
//                     if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                       return (
//                         <text
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           textAnchor="middle"
//                           dominantBaseline="middle"
//                         >
//                           <tspan
//                             x={viewBox.cx}
//                             y={viewBox.cy}
//                             className="fill-foreground text-3xl font-bold"
//                           >
//                             {data.length}
//                           </tspan>
//                           <tspan
//                             x={viewBox.cx}
//                             y={(viewBox.cy || 0) + 24}
//                             className="fill-muted-foreground"
//                           >
//                             Personnes
//                           </tspan>
//                         </text>
//                       )
//                     }
//                   }}
//                 />
//               </Pie>
//             </PieChart>
//           </ChartContainer>
//         </CardContent>
//         <CardFooter className="flex-col gap-2 text-sm">
//           <div className="flex items-center gap-2 font-medium leading-none">
//             Âge moyen : {(totalAge / data.length).toFixed(2)} ans
//           </div>
//           <div className="leading-none text-muted-foreground">
//             Distribution des âges pour toutes les personnes
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }