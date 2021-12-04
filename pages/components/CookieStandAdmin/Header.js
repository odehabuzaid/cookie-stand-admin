import Link from 'next/link'
const header = ({ logout }) => {
  return (
    <header
      className='flex justify-between p-4'
      style={{ backgroundColor: '#15B981' }}
    >
      <div>
        <p className='text-3xl'>Cookie Stand Admin</p>
      </div>
      <div className='flex justify-between'>
        <button className='px-2 font-bold text-white bg-green-200 rounded w hover:bg-green-700'>
          <Link href='#'>
            <a className=''>Overview</a>
          </Link>
        </button>
        &nbsp;
        <button
          onClick={() => logout()}
          className='px-2 font-bold text-white bg-green-200 rounded w hover:bg-green-700'
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default header
