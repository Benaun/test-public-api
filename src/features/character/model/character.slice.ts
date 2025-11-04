import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Character, CharacterState } from './types'

const initialState: CharacterState = {
  characters: []
}

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addAllCharactersToStore(
      state,
      action: PayloadAction<Character[]>
    ) {
      state.characters = action.payload.map(character => ({
        ...character,
        inFavorite: false
      }))
    },

    createCharacter(state, action: PayloadAction<Character>) {
      state.characters.unshift(action.payload)
    },

    deleteCharacter(
      state,
      action: PayloadAction<{ id: number }>
    ) {
      state.characters = state.characters.filter(
        el => el.id !== action.payload.id
      )
    },

    addToFav(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload
      const character = state.characters.find(el => el.id === id)
      if (character) {
        character.inFavorite = !character.inFavorite
      }
    }
  }
})

export const {
  addAllCharactersToStore,
  deleteCharacter,
  addToFav,
  createCharacter
} = characterSlice.actions

export default characterSlice.reducer
