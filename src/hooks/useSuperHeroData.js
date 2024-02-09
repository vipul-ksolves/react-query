import { useQuery, useMutation, useQueryClient } from "react-query";
import { getSuperHero, addSuperHeroes, getSuperHeroes } from "../services/heroes";

export const useSuperHeroData = (key, heroId) => {
  return useQuery([key, heroId], getSuperHero);
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHeroes,
    {
      onSuccess: (data) => {
         /** Query Invalidation */
        queryClient.invalidateQueries('super-heroes') // it make one more network request get data automaticaly
       
        /** Handling Mutation Response */
        queryClient.setQueryData('super-heroes', oldQueryData => {   //it saves additional network request
          return {
            ...oldQueryData,
            data: [...oldQueryData.data, data.data]
          }
        })
      }
    })
}

export const useSuperHeroesData = (key, options) => {
  const { onSuccess, onError } = options
  return useQuery(key, getSuperHeroes, {
    onSuccess,
    onError
  })
}