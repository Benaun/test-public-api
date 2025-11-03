'use client'

import { CharacterCard } from '..'
import { useEffect } from 'react'

import { useFetchCharactersQuery } from '@/features/character/api'
import { addAllCharactersToStore } from '@/features/character/model/slice'

import {
  useAppDispatch,
  useAppSelector
} from '@/app/model/store'

import { Heading } from '@/common/components'

export const CharactersList = () => {
  const { data, isLoading, isError } = useFetchCharactersQuery()
  const dispatch = useAppDispatch()
  const characters = useAppSelector(
    state => state.characters.characters
  )

  useEffect(() => {
    if (!data?.results?.length) return
    dispatch(addAllCharactersToStore(data.results))
  }, [data?.results, dispatch])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError || !data) {
    return <h1>Failed to load</h1>
  }

  return (
    <section className='container text-center mb-5'>
      <div className='w-full flex flex-col gap-5'>
        <Heading title='Список персонажей' />

        <div className='w-full flex flex-wrap justify-between gap-4'>
          {characters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
