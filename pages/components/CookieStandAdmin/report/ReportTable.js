import { hours } from '../../../../data'
const ReportTable = ({ data, onDelete }) => {
  const hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const totals = []
  return (
    <>
      {data ? (
        <table className='w-1/2 mx-auto my-4 divide-y divide-green-500'>
          <thead>
            <tr>
              <th>Location</th>
              {hours.map((slot) => (
                <th key={slot}>{slot}</th>
              ))}
              <th>Totals</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stand, dIndex) => {
              return (
                <tr>
                  <td>
                    <div className='flex justify-between p-4'>
                      <span className='flex'>{stand.location}</span>
                      <span
                        className='flex col-end-2'
                        onClick={() => onDelete(stand.id)}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 cursor-pointer'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                  {hours.map((_, index) => {
                    const rnd =
                      Math.random() *
                        (stand.maximum_customers_per_hour -
                          stand.minimum_customers_per_hour) +
                      1
                    const salesPerHour = Math.ceil(
                      rnd * stand.average_cookies_per_sale
                    )
                    hourly_sales[index] = hourly_sales[index] + salesPerHour
                    if (index == hours.length - 1) {
                      totals[dIndex] = hourly_sales.reduce(
                        (partial_sum, a) => partial_sum + a,
                        0
                      )
                    }
                    return <td>{salesPerHour}</td>
                  })}
                  <td>
                    {hourly_sales.reduce(
                      (partial_sum, a) => partial_sum + a,
                      0
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>Totals</th>
              {hourly_sales.map((item, i) => {
                return <td key={i}>{item}</td>
              })}
              <td>{totals.reduce((partial_sum, a) => partial_sum + a, 0)}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className='text-center'>No Cookies Stands Available</p>
      )}
    </>
  )
}

export default ReportTable
