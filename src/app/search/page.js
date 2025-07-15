import Link from "next/link";
import { Header } from "../_components/header";
import { Form } from "../_components/form";

export default function Search() {
  return (
    <div className="">
      <Header/>
      <main className="">
        <h1>Search doifs</h1>
        <h1>test</h1>
        <Form alwaysShowFilters/>
        <Link href={`/`}>Ir para home</Link>

      </main>
      
    </div>
  );
}
