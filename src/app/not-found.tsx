import Link from 'next/link'

export const metadata = {
  title: '404'
}

const NotFoundPage = () => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center text-center gap-4'>
      <div className='text-8xl font-bold text-gray-300'>404</div>
      <h1 className='text-3xl font-bold tracking-tight'>
        Страница не найдена
      </h1>
      <div className='pt-2'>
        <Link href='/' className='text-red-400'>
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
