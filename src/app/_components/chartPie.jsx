'use client'

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Multiple pie charts with 10 segments each"

// Mock Data Geral
const chartDataGeral = [
    {
        'segment': 'seg_a',
        'visitors': 427,
        'fill': 'var(--color-seg_a)',
        'name': 'Seg A'
    },
    {
        'segment': 'seg_b',
        'visitors': 157,
        'fill': 'var(--color-seg_b)',
        'name': 'Seg B'
    },
    {
        'segment': 'seg_c',
        'visitors': 112,
        'fill': 'var(--color-seg_c)',
        'name': 'Seg C'
    },
    {
        'segment': 'seg_d',
        'visitors': 479,
        'fill': 'var(--color-seg_d)',
        'name': 'Seg D'
    },
    {
        'segment': 'seg_e',
        'visitors': 240,
        'fill': 'var(--color-seg_e)',
        'name': 'Seg E'
    },
    {
        'segment': 'seg_f',
        'visitors': 225,
        'fill': 'var(--color-seg_f)',
        'name': 'Seg F'
    },
    {
        'segment': 'seg_g',
        'visitors': 214,
        'fill': 'var(--color-seg_g)',
        'name': 'Seg G'
    },
    {
        'segment': 'seg_h',
        'visitors': 171,
        'fill': 'var(--color-seg_h)',
        'name': 'Seg H'
    },
    {
        'segment': 'seg_i',
        'visitors': 477,
        'fill': 'var(--color-seg_i)',
        'name': 'Seg I'
    },
    {
        'segment': 'seg_j',
        'visitors': 152,
        'fill': 'var(--color-seg_j)',
        'name': 'Seg J'
    }
];

// Mock Data Tipo 1
const chartDataTipo1 = [
    {
        'segment': 'seg_a',
        'visitors': 396,
        'fill': 'var(--color-seg_a)',
        'name': 'Seg A'
    },
    {
        'segment': 'seg_b',
        'visitors': 329,
        'fill': 'var(--color-seg_b)',
        'name': 'Seg B'
    },
    {
        'segment': 'seg_c',
        'visitors': 94,
        'fill': 'var(--color-seg_c)',
        'name': 'Seg C'
    },
    {
        'segment': 'seg_d',
        'visitors': 352,
        'fill': 'var(--color-seg_d)',
        'name': 'Seg D'
    },
    {
        'segment': 'seg_e',
        'visitors': 266,
        'fill': 'var(--color-seg_e)',
        'name': 'Seg E'
    },
    {
        'segment': 'seg_f',
        'visitors': 66,
        'fill': 'var(--color-seg_f)',
        'name': 'Seg F'
    },
    {
        'segment': 'seg_g',
        'visitors': 65,
        'fill': 'var(--color-seg_g)',
        'name': 'Seg G'
    },
    {
        'segment': 'seg_h',
        'visitors': 97,
        'fill': 'var(--color-seg_h)',
        'name': 'Seg H'
    },
    {
        'segment': 'seg_i',
        'visitors': 161,
        'fill': 'var(--color-seg_i)',
        'name': 'Seg I'
    },
    {
        'segment': 'seg_j',
        'visitors': 169,
        'fill': 'var(--color-seg_j)',
        'name': 'Seg J'
    }
];

// Mock Data Tipo 2
const chartDataTipo2 = [
    {
        'segment': 'seg_a',
        'visitors': 408,
        'fill': 'var(--color-seg_a)',
        'name': 'Seg A'
    },
    {
        'segment': 'seg_b',
        'visitors': 458,
        'fill': 'var(--color-seg_b)',
        'name': 'Seg B'
    },
    {
        'segment': 'seg_c',
        'visitors': 163,
        'fill': 'var(--color-seg_c)',
        'name': 'Seg C'
    },
    {
        'segment': 'seg_d',
        'visitors': 437,
        'fill': 'var(--color-seg_d)',
        'name': 'Seg D'
    },
    {
        'segment': 'seg_e',
        'visitors': 251,
        'fill': 'var(--color-seg_e)',
        'name': 'Seg E'
    },
    {
        'segment': 'seg_f',
        'visitors': 516,
        'fill': 'var(--color-seg_f)',
        'name': 'Seg F'
    },
    {
        'segment': 'seg_g',
        'visitors': 482,
        'fill': 'var(--color-seg_g)',
        'name': 'Seg G'
    },
    {
        'segment': 'seg_h',
        'visitors': 509,
        'fill': 'var(--color-seg_h)',
        'name': 'Seg H'
    },
    {
        'segment': 'seg_i',
        'visitors': 429,
        'fill': 'var(--color-seg_i)',
        'name': 'Seg I'
    },
    {
        'segment': 'seg_j',
        'visitors': 364,
        'fill': 'var(--color-seg_j)',
        'name': 'Seg J'
    }
];

// Chart Config (10 segments)
const chartConfig = {
    'visitors': {
        'label': 'Contagem'
    },
    'seg_a': {
        'label': 'Seg A',
        'color': 'var(--chart-1)'
    },
    'seg_b': {
        'label': 'Seg B',
        'color': 'var(--chart-2)'
    },
    'seg_c': {
        'label': 'Seg C',
        'color': 'var(--chart-3)'
    },
    'seg_d': {
        'label': 'Seg D',
        'color': 'var(--chart-4)'
    },
    'seg_e': {
        'label': 'Seg E',
        'color': 'var(--chart-5)'
    },
    'seg_f': {
        'label': 'Seg F',
        'color': 'var(--chart-6)'
    },
    'seg_g': {
        'label': 'Seg G',
        'color': 'var(--chart-7)'
    },
    'seg_h': {
        'label': 'Seg H',
        'color': 'var(--chart-8)'
    },
    'seg_i': {
        'label': 'Seg I',
        'color': 'var(--chart-9)'
    },
    'seg_j': {
        'label': 'Seg J',
        'color': 'var(--chart-10)'
    }
};

// Componente auxiliar para um único gráfico de pizza
function SinglePieChart({ data, title, description }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px] md:max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              // nameKey agora usa 'name' que tem o nome completo do segmento
              content={<ChartTooltipContent nameKey="name" hideLabel />} 
            />
            <Pie 
              data={data} 
              dataKey="visitors"
              innerRadius={60} // Adicionado innerRadius para um anel donut
            >
              <LabelList
                dataKey="segment" // Chave do segmento (e.g., 'seg_a')
                className="fill-background"
                stroke="none"
                fontSize={12}
                // Formata o rótulo usando a chave do segmento para buscar o label no chartConfig
                formatter={(value) => chartConfig[value]?.label} 
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function ChartPieLabelList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        
        {/* Gráfico 1: Geral */}
        <SinglePieChart 
            data={chartDataGeral} 
            title="Geral (Total de Tipos)"
            description="Distribuição total dos 10 segmentos"
        />

        {/* Gráfico 2: Tipo 1 */}
        <SinglePieChart 
            data={chartDataTipo1} 
            title="Tipo 1"
            description="Distribuição dos 10 segmentos para o Tipo 1"
        />

        {/* Gráfico 3: Tipo 2 */}
        <SinglePieChart 
            data={chartDataTipo2} 
            title="Tipo 2"
            description="Distribuição dos 10 segmentos para o Tipo 2"
        />

        {/* Card Footer unificado, se necessário, ou removido para cada gráfico individual. 
            Mantive o footer no componente SinglePieChart, mas vou remover o TrendingUp e ajustá-lo.
            Se você quiser apenas o texto informativo (CardFooter), pode colocá-lo abaixo dos gráficos.
        */}
    </div>
  )
}