

const CreateForm = ({ onCreate }) => {
    function handleSubmit(event) {
      event.preventDefault();
      const standInfo = {
          location: event.target.location.value,
          minimum_customers_per_hour: parseInt(event.target.min.value),
          maximum_customers_per_hour: parseInt(event.target.max.value),
          average_cookies_per_sale: parseFloat(event.target.avg.value),
      }
      onCreate(standInfo);
      event.target.reset();
  }
  return (
    <>
      <form
        className='p-2 mx-auto my-10 rounded-md'
        style={{ backgroundColor: '#6FE6B7' }}
        onSubmit={handleSubmit}
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
            <input type='number'  step="any" name='avg' className='rounded-br-md' />
          </div>
          <button className='w-2/6' style={{ backgroundColor: '#15B981' }}>
            Create
          </button>
        </div>
      </form>

    </>
  )
}

export default CreateForm
