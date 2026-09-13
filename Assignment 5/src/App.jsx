import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Technologies from './Technologies.jsx'

function App() {
  const [stack, setStack] = useState([])

  function addToStack(technology) {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warn(`${technology.name} is already in your stack.`)
      return
    }
    setStack([...stack, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  function removeFromStack(id) {
    const technology = stack.find((item) => item.id === id)
    if (!technology) return
    setStack(stack.filter((item) => item.id !== id))
    toast.info(`${technology.name} removed from your stack.`)
  }

  function removeAll() {
    if (stack.length === 0) return
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies
          stack={stack}
          onAddToStack={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
      </main>
      <ToastContainer />
    </>
  )
}

export default App
