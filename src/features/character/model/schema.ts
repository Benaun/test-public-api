import { z } from 'zod'

export const characterSchema = z.object({
  name: z
    .string()
    .min(2, 'Должно быть минимум 2 символа')
    .max(64, 'Не более 64 символов'),
  status: z
    .string()
    .min(2, 'Должно быть минимум 2 символа')
    .max(10, 'Не более 10 символов'),
  species: z
    .string()
    .min(2, 'Должно быть минимум 2 символа')
    .max(10, 'Не более 10 символов'),
  type: z
    .string()
    .min(2, 'Должно быть минимум 2 символа')
    .max(10, 'Не более 10 символов'),
  gender: z
    .string()
    .min(2, 'Должно быть минимум 2 символа')
    .max(10, 'Не более 10 символов'),
  origin: z.string().min(2, 'Должно быть минимум 2 символа'),
  location: z.string().min(2, 'Должно быть минимум 2 символа')
})

export type characterFormData = z.infer<typeof characterSchema>
