'use client'

import { useParams } from 'next/navigation'

import { useFetchCharacterByIdQuery } from '@/features/character/api'
import { CharacterDetails } from '@/features/character/ui'

const CharacterPage = () => {
  const params = useParams()
  const id = params.id as string

  const {
    data: character,
    isLoading,
    isFetching
  } = useFetchCharacterByIdQuery(id)

  if (isLoading || isFetching) {
    return (
      <div className='animate-pulse'>
        <div className='h-[700px] w-full bg-gray-200 rounded mb-4'></div>
      </div>
    )
  }

  if (!character) return <div>Character not found</div>

  return <CharacterDetails item={character} />
}

export default CharacterPage
