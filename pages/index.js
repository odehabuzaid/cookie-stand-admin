import FOOTER from './components/FOOTER'
import FORM from './components/FORM'
import Header from './components/HEADER'

export default function Home() {
  return (
    <>
      <head>
        <title>Cookie Stand Admin</title>
      </head>
      <main className='flex flex-col h-screen'>
        <Header />
        <FORM />
        <FOOTER />
      </main>
    </>
  )
}
