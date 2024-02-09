import React from "react";
import { Link } from "react-router-dom"

const HomePage = () => {
  return <>
    <h1>This is Home Page</h1>
    <div><Link to='/rq-parallel'>Parallel Query</Link></div>
    <div><Link to='/rq-dynamicParallel'>Dynamic Parallel Query</Link></div>
    <div><Link to='/rq-dependent'>Dependent Query</Link></div>
    <div><Link to='/rq-pagination'>Paginated Query</Link></div>
    <div><Link to='/rq-infinite'>Infinite Query</Link></div>
  </>
};

export default HomePage;
