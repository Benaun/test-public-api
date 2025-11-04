'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from '@/app/model/store'

import {
  Character,
  characterFormData,
  characterSchema,
  createCharacter,
  fields
} from '../../model'

import { generateCharacterId } from '@/common/assets'
import { Button, InputField } from '@/common/components'

export const AddCharacterForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<characterFormData>({
    mode: 'onChange',
    resolver: zodResolver(characterSchema)
  })
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = (data: characterFormData) => {
    const newCharacter: Character = {
      id: generateCharacterId(),
      name: data.name,
      status: data.status,
      species: data.species,
      type: data.type,
      gender: data.gender,
      origin: { name: data.origin },
      location: { name: data.location },
      image: '/Card.png',
      inFavorite: false
    }
    console.log(newCharacter)
    dispatch(createCharacter(newCharacter))
    reset()
    router.push('/products')
  }

  const handleCancelEditing = () => {
    reset()
    router.push('/products')
  }

  return (
    <div className='flex relative'>
      <form
        className='max-w-sm mx-auto'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2
          id='character-details-title'
          className='text-2xl font-semibold tracking-tight mb-4'
        >
          Форма создания
        </h2>

        {fields.map(field => (
          <InputField
            key={field.id}
            label={field.label}
            placeholder={field.placeholder}
            register={register}
            fieldName={field.fieldName}
            required
            error={errors[field.fieldName]}
          />
        ))}
        <div className='flex gap-5'>
          <Button
            type='submit'
            className='p-4 text-2xl bg-green-400 rounded-lg cursor-pointer'
          >
            Создать
          </Button>
          <Button
            className='p-4 text-2xl bg-red-300 rounded-lg cursor-pointer'
            type='button'
            onClick={handleCancelEditing}
          >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  )
}
