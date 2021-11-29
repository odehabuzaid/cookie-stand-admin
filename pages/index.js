import { useState } from 'react'
export default function Home() {
  const [data, set_data] = useState([])
  const CreateLocation = (event) => {
    event.preventDefault()

    const form_data = {
      location: event.target.location.value,
      minCustomers: event.target.min.value,
      maxCustomers: event.target.max.value,
      avgCookies: event.target.avg.value
    }
    set_data(() => [...data, form_data])
  }
  return (
    <>
      <head>
        <title>Cookie Stand Admin</title>
      </head>
      <main className='flex flex-col h-screen'>
        <header
          className='flex justify-between p-4'
          style={{ backgroundColor: '#15B981' }}
        >
          <p className='text-2xl'>Cookie Stand Admin</p>
        </header>
        <form
          className='p-2 mx-auto my-10 rounded-md'
          style={{ backgroundColor: '#6FE6B7' }}
          onSubmit={CreateLocation}
        >
          <h1 className='my-6 text-2xl text-center'>Create Cookie Stand</h1>
          <div className='flex'>
            <label className='mx-1'>Location</label>
            <input name='location' className='flex-auto rounded-br-md' />
          </div>
          <div className='flex mx-auto my-5 text-sm'>
            <div className='flex-col w-1/2 text-center'>
              Minimum Customers per hour
              <input type='number' name='min' className='rounded-br-md' />
            </div>
            <div className='flex-col w-1/2 text-center'>
              Maximum Customers per hour
              <input type='number' name='max' className='rounded-br-md' />
            </div>
            <div className='flex-col w-1/2 text-center'>
              Average Cookies per Sale
              <input type='number' name='avg' className='rounded-br-md' />
            </div>
            <button className='w-2/6' style={{ backgroundColor: '#15B981' }}>
              Create
            </button>
          </div>
        </form>
        <p className='my-3 text-center text-gray-900'>
          Report Table Coming Soon...
        </p>
        {data.length > 0
          ? data.map((location) => (
              <div className='my-5 text-center text-gray-900'>
                {JSON.stringify(location)}
              </div>
            ))
          : false}
        <footer className='p-4' style={{ backgroundColor: '#15B981' }}>
          &copy;2021 - Odeh Abuzaid
        </footer>
      </main>
    </>
  )
}
