import React, { useState } from 'react'
import { useAddSuperHeroData } from '../hooks/useSuperHeroData'
import { useNavigate } from 'react-router-dom'

const AddSuperHero = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')

    const { mutate: addHero, isSuccess, isLoading } = useAddSuperHeroData()

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if (isSuccess) {
        navigate('/rq-super-heroes')
    }

    const handleAddHeroClick = () => {
        const hero = { name, alterEgo }
        addHero(hero)
    }

    return (
        <>
            <p>AddSuper Hero page</p>
            <div>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='text'
                    value={alterEgo}
                    onChange={e => setAlterEgo(e.target.value)}
                />
                <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
        </>
    )
}

export default AddSuperHero