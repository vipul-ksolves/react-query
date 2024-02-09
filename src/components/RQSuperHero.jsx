import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams, useNavigate } from "react-router-dom";

const SuperHero = () => {
  const navigate = useNavigate()
  const { heroId } = useParams()

  const { isLoading, data, isError, error } = useSuperHeroData(
    "super-hero",
    heroId
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h3>Super Hero</h3>
      <p>Nmae:- {data.data.name}</p>
      <p>Alter Ego:- {data.data.alterEgo}</p>
      <button onClick={()=>navigate('/rq-super-heroes')}>Back</button>
    </>
  );
};

export default SuperHero;
