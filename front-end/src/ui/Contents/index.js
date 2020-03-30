import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AlunoList from '../../views/AlunoList'
import TurmaList from '../../views/TurmaList'

import './style.scss'

export default function Contents() {
   return (
      <div className="contents">
         <Switch>
            <Route path="/aluno">
               <AlunoList />
            </Route>
            <Route path="/turma">
               <TurmaList />
            </Route>
         </Switch>
      </div>
   )
}