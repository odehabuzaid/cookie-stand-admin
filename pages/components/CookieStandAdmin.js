import React from 'react'
import CreateForm from './CookieStandAdmin/CreateForm'
import Footer from './CookieStandAdmin/Footer'
import Header from './CookieStandAdmin/Header'
import ReportTable from './CookieStandAdmin/report/ReportTable'

const CookieStandAdmin = ({ stands, loading, onCreate, onDelete }) => {
  if (loading) return <p>Loading...</p>
  return (
    <>
      <head>
        <title>Cookie Stand Admin</title>
      </head>
      <main className='flex flex-col h-screen'>
        <Header />
        <CreateForm onCreate={onCreate} />
        <ReportTable data={stands} onDelete={onDelete} />
        <Footer data={stands} />
      </main>
    </>
  )
}

export default CookieStandAdmin
