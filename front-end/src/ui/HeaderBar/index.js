import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export default function HeaderBar() {
   return (
      <header>
         <h1>Escola Agora Vai</h1>
         <nav>
            <ol>
               <li><Link to="/aluno">Alunos</Link></li>
               <li><Link to="/turma">Turmas</Link></li>
               <li>Item 3</li>
            </ol>
         </nav>
      </header>
   )
}