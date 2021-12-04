import React from 'react'
import CreateForm from './CookieStandAdmin/CreateForm'
import Footer from './CookieStandAdmin/Footer'
import Header from './CookieStandAdmin/Header'
import ReportTable from './CookieStandAdmin/report/ReportTable'
import Loading from './utils/Loading'
const CookieStandAdmin = ({ stands, loading, onCreate, onDelete, logout }) => {
  if (loading) return <Loading />
  return (
    <main className='flex flex-col h-screen'>
      
      <Header logout={logout} />
      <CreateForm onCreate={onCreate} />
      <ReportTable data={stands} onDelete={onDelete} />
      <Footer data={stands} />
    </main>
  )
}

export default CookieStandAdmin
