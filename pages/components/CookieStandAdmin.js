import React, { useState } from 'react';
import CreateForm from './CookieStandAdmin/CreateForm';
import Footer from './CookieStandAdmin/Footer';
import Header from './CookieStandAdmin/Header';
import ReportTable from './CookieStandAdmin/report/ReportTable';

const CookieStandAdmin = () => {
    
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
    }

    return (
        <>
        <head>
          <title>Cookie Stand Admin</title>
        </head>
        <main className='flex flex-col h-screen'>
          <Header />
          <CreateForm CreateLocation={CreateLocation} />
          <ReportTable data={data}/>
          <Footer data={data}/>
        </main>
      </>
    );
}

export default CookieStandAdmin;