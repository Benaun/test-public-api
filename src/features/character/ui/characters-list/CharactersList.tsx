'use client'

import { CharacterCard } from '..'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useFetchCharactersQuery } from '@/features/character/api'

import {
  useAppDispatch,
  useAppSelector
} from '@/app/model/store'

import { addAllCharactersToStore } from '../../model'

import { useDebounce } from '@/common/assets'
import {
  Button,
  Heading,
  SearchInput
} from '@/common/components'

export const CharactersList = () => {
  const { data, isLoading, isError } = useFetchCharactersQuery()
  const [filterByFav, setFilterByFav] = useState(false)
  const [search, setSearch] = useState('')
  const debounced = useDebounce<string>(search, 1000)
  const router = useRouter()
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(event.target.value)
  }

  const filteredCharacters = characters.filter(el =>
    el.name
      .toLocaleLowerCase()
      .includes(debounced.toLocaleLowerCase())
  )

  const searchedAndFilteredCharacters = filterByFav
    ? filteredCharacters.filter(el => el.inFavorite === true)
    : filteredCharacters

  return (
    <section className='container text-center mb-5'>
      <div className='w-full flex flex-col gap-5'>
        <div className='flex flex-col'>
          <Heading title='Список персонажей' />
          <div className='flex justify-between'>
            <SearchInput
              search={search}
              handleChange={handleChange}
            />
            <Button
              className={`${filterByFav ? 'bg-red-500' : 'bg-gray-200'} rounded-lg cursor-pointer`}
              onClick={() => setFilterByFav(prev => !prev)}
            >
              В избранном
            </Button>
            <Button
              className=' bg-amber-200 rounded-lg cursor-pointer'
              onClick={() => router.push('/create-product')}
            >
              Создать персонажа
            </Button>
          </div>
        </div>

        <div className='w-full flex flex-wrap justify-between gap-4'>
          {!searchedAndFilteredCharacters.length ? (
            <div>Персонажи не найдены</div>
          ) : (
            searchedAndFilteredCharacters.map(character => (
              <CharacterCard
                key={character.id}
                character={character}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
