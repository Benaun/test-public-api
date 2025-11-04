export interface CharacterState {
  characters: Character[]
  currentCharacter: Character | null
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  location: Location
  image: string
  origin: Origin
  inFavorite: boolean
}

type Location = {
  name: string
}

interface Origin {
  name: string
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
