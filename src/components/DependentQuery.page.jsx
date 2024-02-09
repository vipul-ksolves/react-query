import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchChannelByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQuery = ({ email }) => {
    const { data: userData } = useQuery(['user', email], () =>
        fetchUserByEmail(email)
    )
    const channelId = userData && userData.data.channelId
    const { data: channelCourse } = useQuery(['cources', channelId], () =>
        fetchChannelByChannelId(channelId), {
        enabled: !!channelId
    }
    )
    console.log('channelCourse', channelCourse)

    return (
        <div>Dependent Query page</div>
    )
}

export default DependentQuery