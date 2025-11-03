'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Character } from '../../model/types'

import { CharacterEditingForm } from './CharacterEditingForm'
import { CharacterInfo } from './CharacterInfo'
import { Button } from '@/common/components'

export const CharacterDetails = ({
  item
}: {
  item: Character
}) => {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleBack = () => router.push('/')
  const handleEditingButton = () => setIsEditing(true)

  return (
    <main className='flex w-full gap-10 mt-4 relative'>
      <Button
        onClick={handleBack}
        className='absolute -top-20 left-20 p-2 bg-gray-300 rounded-2xl cursor-pointer'
      >
        Назад
      </Button>
      <div className='flex w-[760px] rounded-2xl mx-auto justify-center'>
        <Image
          src={item ? item.image : 'Card.png'}
          alt={item.name}
          width={600}
          height={600}
        />
      </div>
      {isEditing ? (
        <CharacterEditingForm
          item={item}
          handleCancelEditing={() => setIsEditing(false)}
        />
      ) : (
        <CharacterInfo
          item={item}
          handleEditingButton={handleEditingButton}
        />
      )}
    </main>
  )
}
