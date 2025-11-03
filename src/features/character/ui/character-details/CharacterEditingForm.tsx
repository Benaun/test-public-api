import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { fields } from '@/features/character/model/fields'
import {
  characterFormData,
  characterSchema
} from '@/features/character/model/schema'
import type { Character } from '@/features/character/model/types'

import { Button, InputField } from '@/common/components'

interface IProps {
  handleCancelEditing: () => void
  item: Character
}

export const CharacterEditingForm = ({
  handleCancelEditing,
  item
}: IProps) => {
  const initialValues: characterFormData = {
    name: item.name ?? '-',
    status: item.status ?? '-',
    species: item.species ?? '-',
    type: item.type ?? '-',
    gender: item.gender ?? '-',
    origin: item.origin?.name ?? '-',
    location: item.location?.name ?? '-'
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<characterFormData>({
    resolver: zodResolver(characterSchema),
    mode: 'onChange',
    defaultValues: initialValues
  })

  return (
    <section className='w-[760px] mx-auto rounded-2xl shadow-sm ring-1 ring-black/5 p-6'>
      <h2
        id='character-details-title'
        className='text-2xl font-semibold tracking-tight mb-4'
      >
        Форма редактирования
      </h2>
      <form>
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
          <Button className='p-4 text-2xl bg-green-400 rounded-lg cursor-pointer'>
            Сохранить
          </Button>
          <Button
            className='p-4 text-2xl bg-red-300 rounded-lg cursor-pointer'
            onClick={handleCancelEditing}
          >
            Отмена
          </Button>
        </div>
      </form>
    </section>
  )
}
