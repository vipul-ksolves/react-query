import React from "react";
import { useSuperHeroesData } from "../hooks/useSuperHeroData";
import { Link, useNavigate } from "react-router-dom";

const RQSuperHeroPage = () => {
  const navigate = useNavigate()

  const onSuccess = (data) => {
    console.log("Perform action after fetching data", data)
  }
  const onError = (error) => {
    console.log("Perform action after encountering error", error)
  }

  const { isLoading, isFetching, data, isError, error, refetch } =
    useSuperHeroesData("super-heroes", {
      onSuccess,
      onError,
    })

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data.data.map((item) => (
        <h4 key={item.id}><Link to={`/rq-super-heroes/${item.id}`}>{item.name}</Link></h4>
      ))}
      <button onClick={refetch}>Get Heroes</button>
      <div>
        <button onClick={() => navigate('/rq-addSuperHero')}>Add Heroes</button>
      </div>
    </>
  );
};

export default RQSuperHeroPage;
