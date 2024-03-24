import Image from "next/image";
import Form from "@/components/form";

export default function Home() {
  return (
    <main className="  p-4 text-center bg-white ">
     {/*Titulo*/}
        <h1 className=" text-5xl font-bold    mb-4"> Formulario de Preguntas </h1>
     {/*Formulario*/}
     <Form/>

    
    </main>
  );
}
