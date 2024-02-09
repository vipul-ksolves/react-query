import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
const DynamicParallel = ({ heroIds }) => {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id)
      }
    })
  )

  console.log('queryResult', queryResult)

  return (
    <div>Dynamic Parallel query page</div>
  )
}

export default DynamicParallel