import React from 'react'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(apiUrl, supabaseKey)

// URL de la API y clave de autorización de Supabase
const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export default async function  Form() {
// Endpoint de la tabla que deseas consultar
const endpoint = '/Preguntas';

// Hacer la solicitud fetch
fetch(apiUrl + endpoint, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': supabaseKey
  }
})
.then(response =>{
  if(!response.ok){
    throw new Error('No encontrado');
  }
  return response.json();
})
.then(data =>{
  console.log('Data from supabase:' , data);
})
.catch(err =>{
console.error('Ocurrio un problema', err);
});


 { /*const { data, error } = await supabase
  .from('Preguntas')
  .insert([
    { some_column: 'someValue' },
    { some_column: 'otherValue' },
  ])
  .select()
}

  return (
    <div>
       <form>
        <div className=" justify-center mb-4">
          <label className="block text-gray-700 text-2xl font-bold mb-4" htmlFor="pregunta">
            Ingresa la pregunta
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ejemplo: Que dia naci?"
          />
           <label className="block text-gray-700 text-2xl font-bold mb-4" htmlFor="respuesta">
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
    </div>
  )
}
