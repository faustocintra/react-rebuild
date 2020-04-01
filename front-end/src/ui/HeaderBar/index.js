import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

export default function HeaderBar() {
   return (
      <header>
         <h1>Escola Agora Vai</h1>
         <nav>
            <ol>
               <li>
                  <NavLink to="/aluno" activeClassName="active-route">
                     Alunos</NavLink>
                  </li>
               <li>
                  <NavLink to="/turma" activeClassName="active-route">
                     Turmas
                  </NavLink>
               </li>
               <li>Item 3</li>
            </ol>
         </nav>
      </header>
   )
}