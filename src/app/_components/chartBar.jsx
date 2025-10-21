"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "A grouped bar chart comparing Nomeações and Exonerações in Dark Mode."

// A lista de instituições que você forneceu
const INSTITUICOES = [
  'IFAC', 'IFAL', 'IFAP', 'IFAM', 'IFBA', 'IF Baiano', 'IFCE', 'IFB',
  'IFG', 'IF Goiano', 'IFES', 'IFMA', 'IFMG', 'IFNMG', 'IF Sudeste MG',
  'IFSULDEMINAS', 'IFTM', 'IFMT', 'IFMS', 'IFPA', 'IFPB', 'IFPE',
  'IF Sertão PE', 'IFPI', 'IFPR', 'IFRJ', 'IFF', 'IFRN', 'IFRS',
  'IFFar', 'IFSUL', 'IFRO', 'IFRR', 'IFSC', 'IFC', 'IFSP', 'IFS', 'IFTO'
]

// Dados mantidos, mas as chaves serão mapeadas para nomeacoes e exoneracoes
const chartData = [
  // ... Dados de Abril ...
  { date: "2024-04-01", nomeacoes: 222, exoneracoes: 150 },
  { date: "2024-04-02", nomeacoes: 97, exoneracoes: 180 },
  { date: "2024-04-03", nomeacoes: 167, exoneracoes: 120 },
  { date: "2024-04-04", nomeacoes: 242, exoneracoes: 260 },
  { date: "2024-04-05", nomeacoes: 373, exoneracoes: 290 },
  { date: "2024-04-06", nomeacoes: 301, exoneracoes: 340 },
  { date: "2024-04-07", nomeacoes: 245, exoneracoes: 180 },
  { date: "2024-04-08", nomeacoes: 409, exoneracoes: 320 },
  { date: "2024-04-09", nomeacoes: 59, exoneracoes: 110 },
  { date: "2024-04-10", nomeacoes: 261, exoneracoes: 190 },
  { date: "2024-04-11", nomeacoes: 327, exoneracoes: 350 },
  { date: "2024-04-12", nomeacoes: 292, exoneracoes: 210 },
  { date: "2024-04-13", nomeacoes: 342, exoneracoes: 380 },
  { date: "2024-04-14", nomeacoes: 137, exoneracoes: 220 },
  { date: "2024-04-15", nomeacoes: 120, exoneracoes: 170 },
  { date: "2024-04-16", nomeacoes: 138, exoneracoes: 190 },
  { date: "2024-04-17", nomeacoes: 446, exoneracoes: 360 },
  { date: "2024-04-18", nomeacoes: 364, exoneracoes: 410 },
  { date: "2024-04-19", nomeacoes: 243, exoneracoes: 180 },
  { date: "2024-04-20", nomeacoes: 89, exoneracoes: 150 },
  { date: "2024-04-21", nomeacoes: 137, exoneracoes: 200 },
  { date: "2024-04-22", nomeacoes: 224, exoneracoes: 170 },
  { date: "2024-04-23", nomeacoes: 138, exoneracoes: 230 },
  { date: "2024-04-24", nomeacoes: 387, exoneracoes: 290 },
  { date: "2024-04-25", nomeacoes: 215, exoneracoes: 250 },
  { date: "2024-04-26", nomeacoes: 75, exoneracoes: 130 },
  { date: "2024-04-27", nomeacoes: 383, exoneracoes: 420 },
  { date: "2024-04-28", nomeacoes: 122, exoneracoes: 180 },
  { date: "2024-04-29", nomeacoes: 315, exoneracoes: 240 },
  { date: "2024-04-30", nomeacoes: 454, exoneracoes: 380 },
  // ... Dados de Maio ...
  { date: "2024-05-01", nomeacoes: 165, exoneracoes: 220 },
  { date: "2024-05-02", nomeacoes: 293, exoneracoes: 310 },
  { date: "2024-05-03", nomeacoes: 247, exoneracoes: 190 },
  { date: "2024-05-04", nomeacoes: 385, exoneracoes: 420 },
  { date: "2024-05-05", nomeacoes: 481, exoneracoes: 390 },
  { date: "2024-05-06", nomeacoes: 498, exoneracoes: 520 },
  { date: "2024-05-07", nomeacoes: 388, exoneracoes: 300 },
  { date: "2024-05-08", nomeacoes: 149, exoneracoes: 210 },
  { date: "2024-05-09", nomeacoes: 227, exoneracoes: 180 },
  { date: "2024-05-10", nomeacoes: 293, exoneracoes: 330 },
  { date: "2024-05-11", nomeacoes: 335, exoneracoes: 270 },
  { date: "2024-05-12", nomeacoes: 197, exoneracoes: 240 },
  { date: "2024-05-13", nomeacoes: 197, exoneracoes: 160 },
  { date: "2024-05-14", nomeacoes: 448, exoneracoes: 490 },
  { date: "2024-05-15", nomeacoes: 473, exoneracoes: 380 },
  { date: "2024-05-16", nomeacoes: 338, exoneracoes: 400 },
  { date: "2024-05-17", nomeacoes: 499, exoneracoes: 420 },
  { date: "2024-05-18", nomeacoes: 315, exoneracoes: 350 },
  { date: "2024-05-19", nomeacoes: 235, exoneracoes: 180 },
  { date: "2024-05-20", nomeacoes: 177, exoneracoes: 230 },
  { date: "2024-05-21", nomeacoes: 82, exoneracoes: 140 },
  { date: "2024-05-22", nomeacoes: 81, exoneracoes: 120 },
  { date: "2024-05-23", nomeacoes: 252, exoneracoes: 290 },
  { date: "2024-05-24", nomeacoes: 294, exoneracoes: 220 },
  { date: "2024-05-25", nomeacoes: 201, exoneracoes: 250 },
  { date: "2024-05-26", nomeacoes: 213, exoneracoes: 170 },
  { date: "2024-05-27", nomeacoes: 420, exoneracoes: 460 },
  { date: "2024-05-28", nomeacoes: 233, exoneracoes: 190 },
  { date: "2024-05-29", nomeacoes: 78, exoneracoes: 130 },
  { date: "2024-05-30", nomeacoes: 340, exoneracoes: 280 },
  { date: "2024-05-31", nomeacoes: 178, exoneracoes: 230 },
  // ... Dados de Junho (último mês) ...
  { date: "2024-06-01", nomeacoes: 178, exoneracoes: 200 },
  { date: "2024-06-02", nomeacoes: 470, exoneracoes: 410 },
  { date: "2024-06-03", nomeacoes: 103, exoneracoes: 160 },
  { date: "2024-06-04", nomeacoes: 439, exoneracoes: 380 },
  { date: "2024-06-05", nomeacoes: 88, exoneracoes: 140 },
  { date: "2024-06-06", nomeacoes: 294, exoneracoes: 250 },
  { date: "2024-06-07", nomeacoes: 323, exoneracoes: 370 },
  { date: "2024-06-08", nomeacoes: 385, exoneracoes: 320 },
  { date: "2024-06-09", nomeacoes: 438, exoneracoes: 480 },
  { date: "2024-06-10", nomeacoes: 155, exoneracoes: 200 },
  { date: "2024-06-11", nomeacoes: 92, exoneracoes: 150 },
  { date: "2024-06-12", nomeacoes: 492, exoneracoes: 420 },
  { date: "2024-06-13", nomeacoes: 81, exoneracoes: 130 },
  { date: "2024-06-14", nomeacoes: 426, exoneracoes: 380 },
  { date: "2024-06-15", nomeacoes: 307, exoneracoes: 350 },
  { date: "2024-06-16", nomeacoes: 371, exoneracoes: 310 },
  { date: "2024-06-17", nomeacoes: 475, exoneracoes: 520 },
  { date: "2024-06-18", nomeacoes: 107, exoneracoes: 170 },
  { date: "2024-06-19", nomeacoes: 341, exoneracoes: 290 },
  { date: "2024-06-20", nomeacoes: 408, exoneracoes: 450 },
  { date: "2024-06-21", nomeacoes: 169, exoneracoes: 210 },
  { date: "2024-06-22", nomeacoes: 317, exoneracoes: 270 },
  { date: "2024-06-23", nomeacoes: 480, exoneracoes: 530 },
  { date: "2024-06-24", nomeacoes: 132, exoneracoes: 180 },
  { date: "2024-06-25", nomeacoes: 141, exoneracoes: 190 },
  { date: "2024-06-26", nomeacoes: 434, exoneracoes: 380 },
  { date: "2024-06-27", nomeacoes: 448, exoneracoes: 490 },
  { date: "2024-06-28", nomeacoes: 149, exoneracoes: 200 },
  { date: "2024-06-29", nomeacoes: 103, exoneracoes: 160 },
  { date: "2024-06-30", nomeacoes: 446, exoneracoes: 400 },
]

// Configuração do Gráfico atualizada para Nomeações/Exonerações e cores Azuis
const chartConfig = {
  views: {
    label: "Contagem de Atos",
  },
  nomeacoes: {
    label: "Nomeações",
    // Azul Escuro (para dark mode)
    color: "hsl(210 40% 50%)", 
  },
  exoneracoes: {
    label: "Exonerações",
    // Azul Claro (para dark mode)
    color: "hsl(210 40% 70%)",
  },
} 

export function ChartBarInteractive() {
  // Estado para a seleção da instituição
  const [instituicaoSelecionada, setInstituicaoSelecionada] = React.useState(INSTITUICOES[0])
  
  // Lógica de filtragem para mostrar apenas o "Último Mês" (30 dias)
  const filteredData = React.useMemo(() => {
    const daysToSubtract = 30
    const referenceDate = new Date("2024-06-30") // Data de referência
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    
    // Filtra os dados para os últimos 30 dias (Último Mês)
    return chartData.filter((item) => {
      const date = new Date(item.date)
      return date >= startDate
    })
  }, []) 

  return (
    // Aplica a classe 'dark' para forçar o tema escuro
    <div className="rounded-2xl dark bg-background">
      <Card className="py-0 bg-blue-950 shadow-2xl">
        <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
            <CardTitle>Atos de pessoal (nomeações e exonerações) do Instituto Federal - {instituicaoSelecionada}</CardTitle>
            <CardDescription>
              Comparativo diário de atos para os últimos 30 dias. Selecione a instituição desejada.
            </CardDescription>
          </div>
          
          {/* Select para Instituições */}
          <div className="flex justify-end p-4 sm:p-6">
            <Select value={instituicaoSelecionada} onValueChange={setInstituicaoSelecionada}>
              <SelectTrigger
                className="w-[200px] rounded-lg"
                aria-label="Selecione uma instituição"
              >
                <SelectValue placeholder="Selecione a Instituição" />
              </SelectTrigger>
              <SelectContent className="rounded-xl max-h-[300px]">
                {INSTITUICOES.map((instituicao) => (
                  <SelectItem key={instituicao} value={instituicao} className="rounded-lg">
                    {instituicao}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={filteredData}
              barGap={4} // Adicionado um pequeno gap entre os grupos de barras
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("pt-BR", { 
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    // O Tooltip agora mostra as duas séries (nomeacoes e exoneracoes)
                    nameKey="label"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("pt-BR", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    }}
                  />
                }
              />
              
              {/* Barra 1: Nomeações (Azul Escuro) */}
              <Bar 
                dataKey="nomeacoes" 
                fill={chartConfig.nomeacoes.color} 
                radius={4} 
              />
              
              {/* Barra 2: Exonerações (Azul Claro) */}
              {/* Como não há stackId, o Recharts as agrupa automaticamente */}
              <Bar 
                dataKey="exoneracoes" 
                fill={chartConfig.exoneracoes.color} 
                radius={4} 
              />
              
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}