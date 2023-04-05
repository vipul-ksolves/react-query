import { useQuery } from "react-query"
import axios from "axios"

 const getSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const useSuperHeroesData =(key, options)=>{
    const { onSuccess,onError} = options
    return useQuery(key, getSuperHeroes,{
        onSuccess,
        onError
    })
}



