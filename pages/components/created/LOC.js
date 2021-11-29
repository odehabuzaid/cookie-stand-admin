const LOC = ({ data }) => {
  return (
    <>
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
    </>
  )
}

export default LOC
