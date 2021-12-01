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
                    <div>
                      <p>{stand.location}</p>
                      <span onClick={() => onDelete(stand.id)}>[X]</span>
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
