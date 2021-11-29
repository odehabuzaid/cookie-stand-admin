import { useState } from 'react'
import LOC from './created/LOC'
const MAIN = () => {
  // useEffect(() => {
  //   const ls_data =  JSON.parse(localStorage.getItem('Locations')) || [];
  //   set_data(() => [...data, ls_data])
  // }, [])

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
    // localStorage.setItem('Locations', JSON.stringify(...data) );
  }

  return (
    <>
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
      <LOC data={data} />
    </>
  )
}

export default MAIN
