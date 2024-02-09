import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchColor = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

const PaginatedQuery = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const { data, isLoading, isFetching } = useQuery(
        ['colour', pageNumber],
        () => fetchColor(pageNumber),
        {
            keepPreviousData: true
        }
    )

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div>
                {data && data.data.map(color => {
                    return (
                        <div key={color.id}>
                            <h2>
                                {color.id}. {color.label}
                            </h2>
                        </div>
                    )
                })}
            </div>
            <div>
                <button
                    onClick={() => setPageNumber(page => page - 1)}
                    disabled={pageNumber === 1}>
                    Prev Page
                </button>
                <button
                    onClick={() => setPageNumber(page => page + 1)}
                    disabled={pageNumber === 4}>
                    Next Page
                </button>
            </div>
            {isFetching && 'Loading'}
        </>
    )
}

export default PaginatedQuery