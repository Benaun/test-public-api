import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

import { CharacterResponse } from '../model/types'

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
    })
  })
})

export const { useFetchCharactersQuery } = charactersApi
