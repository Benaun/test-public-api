export interface CharacterState {
  characters: Character[]
  currentCharacter: Character | null
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  gender: string
  location: Location
  image: string
  inFavorite: boolean
}
