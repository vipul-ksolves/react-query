import React from 'react'
import { useFriendsData } from '../hooks/useFriendsData'

const RQParaller = () => {
  const { friendsIsLoading, data: friendsData } = useFriendsData("friends");
  const { superHerosIsLoading, data: superHerosData } = useFriendsData("super-heros");


  if (friendsIsLoading || superHerosIsLoading) {
    return <h2>Loading...</h2>;
  }

  console.log('friendsData', friendsData)
  console.log('superHerosData', superHerosData)

  return (
    <div>RQ Paraller page</div>
  )
}

export default RQParaller