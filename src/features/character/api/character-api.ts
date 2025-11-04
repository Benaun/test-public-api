import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

import { Character, CharacterResponse } from '../model/types'

import { config } from '@/common/config'

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.BASE_URL
  }),
  tagTypes: ['Characters'],
  endpoints: build => ({
    fetchCharacters: build.query<CharacterResponse, void>({
      query: () => 'character',
      providesTags: ['Characters']
    }),
    fetchCharacterById: build.query<Character, string>({
      query: id => `character/${id}`,
      providesTags: ['Characters']
    })
  })
})

export const {
  useFetchCharactersQuery,
  useFetchCharacterByIdQuery
} = charactersApi
