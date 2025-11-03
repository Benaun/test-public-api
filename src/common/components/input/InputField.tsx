import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister
} from 'react-hook-form'

interface IProps<T extends FieldValues> {
  label: string
  fieldName: Path<T>
  register: UseFormRegister<T>
  required: boolean
  placeholder: string
  error?: FieldError
}

export const InputField = <T extends FieldValues>({
  label,
  register,
  fieldName,
  required,
  placeholder,
  error
}: IProps<T>) => {
  return (
    <div className='max-w-[420px] text-(--color-01) flex flex-col gap-2 box-border'>
      <label className='text-[18px] font-semibold leading-none'>
        {label}
      </label>
      <input
        className={`w-full border-2 rounded-2xl box-border py-2.5 pl-4 pr-2 outline-none focus:ring-2 ${error ? 'border-[#ff4444] focus:ring-[#ff4444]' : ''}`}
        {...register(fieldName, { required })}
        placeholder={placeholder}
        type='text'
      />
      {error && (
        <p className='text-[10px] mt-1 ml-1 text-[#ff4444]'>
          {error.message}
        </p>
      )}
    </div>
  )
}
