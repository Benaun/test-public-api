import { Character } from '../../model/types'

import { Button, Field } from '@/common/components'

interface CharacterInfoProps {
  item: Character
  handleEditingButton: () => void
}

export const CharacterInfo = ({
  item,
  handleEditingButton
}: CharacterInfoProps) => {
  return (
    <section className='w-[760px] mx-auto rounded-2xl bg-(--color-06) shadow-sm ring-1 ring-black/5 p-6'>
      <h2
        id='character-details-title'
        className='text-2xl font-semibold tracking-tight mb-4'
      >
        Карточка персонажа
      </h2>
      <div className='flex flex-wrap gap-4 mb-10'>
        <Field label='Имя' value={item.name} />
        <Field label='Вид' value={item.species || '—'} />
        <Field label='Тип' value={item.type || '—'} />
        <Field label='Пол' value={item.gender || '—'} />
        <Field
          label='Происхождение'
          value={item.origin?.name || '—'}
        />
        <Field
          label='Локация'
          value={item.location?.name || '—'}
        />
      </div>
      <Button
        onClick={handleEditingButton}
        className='p-4 text-2xl bg-amber-300 rounded-lg cursor-pointer'
      >
        Редактировать
      </Button>
    </section>
  )
}
