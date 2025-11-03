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

export interface CharacterResponse {
  info: Info
  results: Character[]
}

type Info = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}
