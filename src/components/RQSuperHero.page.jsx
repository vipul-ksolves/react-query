import { useSuperHeroesData } from "../hooks/useSuperHeroData"

const RQSuperHeroPage = () => {

    const onSuccess = (data) => {
        console.log('Perform action after fetching data', data)
    }
    const onError = (error) => {
        console.log('Perform action after encountering error', error)
    }

    const { isLoading, isFetching, data, isError, error, refetch } = useSuperHeroesData(
        'super-heroes',
        {
            // enabled: false,
            onSuccess,
            onError
        }
    )

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {/* <button onClick={refetch}>Get Heroes</button> */}
            {
                data?.data.map((hero) => {
                    return <dir key={hero.id}>{hero.name}</dir>
                })
            }
        </>
    )
}

export default RQSuperHeroPage
