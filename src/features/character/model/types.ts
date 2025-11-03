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

interface Location {
  name: string
  url: string
}

interface Origin {
  name: string
  url: string
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
