interface DetailFieldProps {
  label: string
  value: string
}

export const Field = ({ label, value }: DetailFieldProps) => {
  return (
    <div className='space-y-1 w-full sm:w-[calc(50%-0.5rem)]'>
      <p className='text-xl uppercase tracking-wide text-gray-500'>
        {label}
      </p>
      <p className='text-xl font-medium text-gray-900'>
        {value}
      </p>
    </div>
  )
}
