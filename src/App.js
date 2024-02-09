import React from 'react'
import dotenv from 'dotenv'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import  HomePage  from './components/Home.page'
import  SuperHeroes  from './components/SuperHero.page'
import  RQSuperHeroes  from './components/RQSuperHeroes.page'
import  RQSuperHero  from './components/RQSuperHero'
import RQParallel from './components/RQParaller.page'
import DynamicParallel from './components/DynamicParallel.page'
import DependentQuery from './components/DependentQuery.page'
import PaginatedQuery from './components/PaginatedQuery.page'
import InfiniteQuery from './components/InfiniteQuery.page'
import AddSuperHero from './components/AddSuperHero.page'

dotenv.config()

const apiUrl = process.env.REACT_APP_API_KEY
console.log('apiUrl', apiUrl)
function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/super-heroes' element={<SuperHeroes />} />
          <Route path='/rq-super-heroes'  element={<RQSuperHeroes />}/>
          <Route path='/rq-super-heroes/:heroId'  element={<RQSuperHero />}/>
          <Route path='/rq-parallel'  element={<RQParallel />}/>
          <Route path='/rq-dynamicParallel'  element={<DynamicParallel heroIds={[1,3]} />}/>
          <Route path='/rq-dependent'  element={<DependentQuery email='vipul@example.com' />}/>
          <Route path='/rq-pagination'  element={<PaginatedQuery />}/>
          <Route path='/rq-infinite'  element={<InfiniteQuery />}/>
          <Route path='/rq-addSuperHero'  element={<AddSuperHero />}/>
        </Routes>
      </div>
  )
}

export default App