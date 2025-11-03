'use client'

import { Provider } from 'react-redux'

import { store } from '@/app/model/store'

export const Providres = ({
  children
}: {
  children: React.ReactNode
}) => {
  return <Provider store={store}>{children}</Provider>
}
