import { CharacterDetails } from '@/features/character/ui'

export const metadata = {
  title: 'Детали персонажа'
}

export default function CharacterPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  return <CharacterDetails id={id} />
}
