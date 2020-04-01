import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export default function AlunoList() {

   const [data, setData] = useState([])

   useEffect(() => {
      /* Para usar async/await dentro de useEffect(),
         é necessário criar uma função isolada nesse escopo
         e fazer nele mesmo uma chamada a esta função.
      */
      async function fetchData() {
         try {
            const response = await api.get('aluno')
            //console.log(response.data)
            setData(response.data)
            console.log(data)
         }
         catch (error) {
            console.log(error)
         }
      }
      fetchData()
   }, [])

   return (
      <table>
         <thead>
            <tr>
               <th>Núm. Matrícula</th>
               <th>Nome</th>
               <th>E-mail</th>
               <th>Telefone</th>
            </tr>
         </thead>
         <tbody>
            {data.map(reg => (
               <tr key={reg._id}>
                  <td>{reg.num_matricula}</td>
                  <td>{reg.nome}</td>
                  <td>{reg.email}</td>
                  <td>{reg.telefone}</td>
               </tr>
            ))}
         </tbody>
      </table>

   )
}