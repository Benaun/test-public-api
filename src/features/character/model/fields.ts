import { characterFormData } from './schema'

export const fields = [
  {
    id: 1,
    label: 'Имя',
    placeholder: 'Имя',
    fieldName: 'name' as keyof characterFormData
  },
  {
    id: 2,
    label: 'Статус',
    placeholder: 'Статус',
    fieldName: 'status' as keyof characterFormData
  },
  {
    id: 3,
    label: 'Расса',
    placeholder: 'Расса',
    fieldName: 'species' as keyof characterFormData
  },
  {
    id: 4,
    label: 'Тип',
    placeholder: 'Тип',
    fieldName: 'type' as keyof characterFormData
  },
  {
    id: 5,
    label: 'Происхождение',
    placeholder: 'Происхождение',
    fieldName: 'origin' as keyof characterFormData
  },
  {
    id: 6,
    label: 'Планета',
    placeholder: 'Планета',
    fieldName: 'location' as keyof characterFormData
  },
  {
    id: 7,
    label: 'Пол',
    placeholder: 'Пол',
    fieldName: 'gender' as keyof characterFormData
  }
]
