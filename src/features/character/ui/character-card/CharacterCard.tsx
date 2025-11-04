'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

import { useAppDispatch } from '@/app/model/store'

import { addToFav, deleteCharacter } from '../../model'
import { Character } from '../../model/types'

import { Button } from '@/common/components'

export const CharacterCard = ({
  character
}: {
  character: Character
}) => {
  const dispatch = useAppDispatch()

  if (!character) return null
  const id = character.id

  const handleToggleFavorite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    dispatch(addToFav({ id: character.id }))
  }

  const handleDeleteCharacter = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    dispatch(deleteCharacter({ id: character.id }))
  }

  return (
    <Link
      href={`/products/${id}`}
      className='w-[360px] h-[168px] rounded-[16px] bg-gray-400 block'
    >
      <div className='flex p-6 gap-5'>
        <Image
          src={character.image || '/Card.png'}
          alt={character.name || 'Foto'}
          width={120}
          height={120}
          className='h-full w-auto object-cover'
        />
        <div className='flex flex-col justify-between w-full'>
          <h3 className='text-base font-medium'>
            {character.name}
          </h3>
          <div className='flex items-center justify-between'>
            <Button
              type='button'
              aria-label='Toggle favorite'
              onClick={handleToggleFavorite}
            >
              {character.inFavorite ? (
                <FaHeart size={30} fill={'#ee3d3d'} />
              ) : (
                <FaRegHeart size={30} />
              )}
            </Button>

            <Button
              type='button'
              aria-label='Delete character'
              className='bg-red-300 p-1 rounded-lg'
              onClick={handleDeleteCharacter}
            >
              Удалить
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
