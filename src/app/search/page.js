import Link from "next/link";
import { Header } from "../_components/header";
import { Form } from "../_components/form";
import { CardPub } from "../_components/cardPub";

const pubshhh = [
  {
    ordinance: "Portaria de 10/04/2024",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Nomeação",
    date: "10/04/2024"
  },
  {
    ordinance: "Portaria de 10/04/2023",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Nomeação",
    date: "10/04/2023"
  },
  {
    ordinance: "Portaria de 10/04/2025",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Exoneração",
    date: "10/04/2025"
  },
  {
    ordinance: "Portaria de 10/04/2025",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Exoneração",
    date: "10/04/2025"
  },
  {
    ordinance: "Portaria de 10/04/2025",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Exoneração",
    date: "10/04/2025"
  },
  {
    ordinance: "Portaria de 10/04/2025",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Exoneração",
    date: "10/04/2025"
  },
  {
    ordinance: "Portaria de 10/04/2025",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Exoneração",
    date: "10/04/2025"
  },
  {
    ordinance: "Portaria de 10/04/2025",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Exoneração",
    date: "10/04/2025"
  },
  {
    ordinance: "Portaria de 10/04/2025",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Exoneração",
    date: "10/04/2025"
  },
  {
    ordinance: "Portaria de 10/04/2025",
    institute: "Instituto Federal de Ciencia e Tecnologia de Alagoas",
    act: "Exoneração",
    date: "10/04/2025"
  },
];

export default async function Search() {
  const data = await fetch('http://127.0.0.1:8000/buscar?name=JOSE DIOGO&institute=IFAL&year=2018')
  const res = await data.json()
  console.log("Saidas")

  console.log(`Saida 2: ${res.publications[0].url}`)

  return (
    <div className="h-[600px] flex flex-col items-center">
      <Header />
      <main className="w-4xl h-full flex flex-col items-center">
        <Form alwaysShowFilters />
        <div className="w-full py-6">
          {
            res.publications.map((res, index) => (
              <CardPub key={index} pubss={res}/>
            ))
          }
        </div>
      </main>
    </div>
  );
}
