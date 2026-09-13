import { ToastContainer } from 'react-toastify'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main id="home" className="mx-auto max-w-[1216px] px-5 py-10">
        <h1 className="text-3xl font-bold">Dev Stack Builder</h1>
        <p className="mt-3">Explore development technologies and build your ideal stack.</p>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
