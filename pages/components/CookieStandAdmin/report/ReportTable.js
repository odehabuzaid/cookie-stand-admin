import { hours } from '../../../../data'

const ReportTable = ({ data }) => {
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  return (
    <>
      {data.length ? (
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
            {data.map((stand, i) => {
              return (
                <tr key={i}>
                  <th>
                    <div>
                      <p>{stand.location}</p>
                    </div>
                  </th>
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
              <td>0</td>
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
