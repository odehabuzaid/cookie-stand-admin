import { hours } from '../../../../data'

const ReportTable = ({ data }) => {
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
                    </div>
                  </td>
                  {hours.map((_, index) => {
                    const rnd =
                      Math.random() *
                        (stand.maxCustomers - stand.minCustomers) +
                      1
                    const salesPerHour = Math.ceil(rnd * stand.avgCookies)
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
