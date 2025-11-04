import type React from 'react'

interface IProps {
  search: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({
  search,
  handleChange
}: IProps) => {
  return (
    <input
      type='text'
      value={search}
      onChange={handleChange}
      placeholder='Поиск по имени'
      className='p-2 bg-slate-300 rounded-xl'
    />
  )
}
