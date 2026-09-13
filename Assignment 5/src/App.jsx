import { ToastContainer } from 'react-toastify'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <ToastContainer />
    </>
  )
}

export default App
