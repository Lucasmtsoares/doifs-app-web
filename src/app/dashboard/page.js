'use client'

import { CardDashboard } from "../_components/cardDashboard";
import { HeaderDashboard } from "../_components/headerDashboard";
import { SideBar } from "../_components/sideBar";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { ChartArea } from "../_components/chartArea";
import { ChartPieLabelList } from "../_components/chartPie";
import { ChartBar } from "lucide-react";
import { ChartBarInteractive } from "../_components/chartBar";
import { ChartBarLabelCustom } from "../_components/chartBarHorizontal";

const options = [
    {
        title: 'Nomeações',
        icon: <FaArrowTrendUp/>,
        count: 100,
        descrition: 'Média geral de nomeações no périodo de Jun/2025 a Jul/2025'
    },
    {
        title: 'Exonerações',
        icon: <FaArrowTrendDown/>,
        count: 200,
        descrition: 'Média geral de nomeações no périodo de Jun/2025 a Jul/2025'
    },
]

export default function Dashboard() {
    return (
        <section className="h-[700px]">
            <HeaderDashboard/>
            <div className="mx-40 mt-20">
               

                <div className="w-full">
                    <ul className="flex justify-around gap-4 pt-6">
                        {
                            options.map((options, index) => (
                                <li key={index}>
                                    <CardDashboard props={options} />
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="pt-8">
                    <ChartArea/>
                </div>

                <div className="pt-8">
                    <ChartBarInteractive/>
                </div>

                <div className="pt-8">
                    <ChartBarLabelCustom/>
                </div>

                <div className="pt-8 hidden">
                    <ChartPieLabelList/>
                </div>
            </div>
        </section>
    )
}