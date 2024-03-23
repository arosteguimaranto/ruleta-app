import Image from "next/image";

export default function Home() {
  return (
    <main className=" p-4 bg-white ">
     {/*Titulo*/}
        <h1 className=" text-3xl mb-4"> Formulario de Preguntas </h1>
     {/*Formulario*/}
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="pregunta">
            Ingresa la pregunta
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ejemplo: Que dia naci?"
          />
           <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="respuesta">
           Ingresa la respuesta
          </label>
          <input
            className="shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ejemplo: 12 de Junio del 2000"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Enviar
          </button>
        </div>
      </form>

    
    </main>
  );
}
