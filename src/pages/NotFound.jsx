function NotFound() {
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col gap-4'>
      <h1 className='text-3xl font-bold text-red-500'>404 - Page Not Found</h1>
      <p className='text-lg text-gray-600'>Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}
export default NotFound;