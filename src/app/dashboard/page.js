'use client'

import { CardDashboard } from "../_components/cardDashboard";
import { HeaderDashboard } from "../_components/headerDashboard";
import { SideBar } from "../_components/sideBar";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { ChartDashboardArea } from "../_components/cardDashboardBar";

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
        <div className="h-[700px] bg-blue-800">
            <HeaderDashboard />
            <div className="flex ">
                <SideBar />

                <div className="w-full bg-black">
                    <ul className="flex justify-around gap-4 bg-cyan-500">
                        {
                            options.map((options, index) => (
                                <li key={index}>
                                    <CardDashboard props={options} />
                                </li>
                            ))
                        }
                    </ul>

                    <ChartDashboardArea/>
                    
                </div>
            </div>
        </div>
    )
}