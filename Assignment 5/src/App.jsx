import { ToastContainer } from 'react-toastify'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Technologies from './Technologies.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
      </main>
      <ToastContainer />
    </>
  )
}

export default App
