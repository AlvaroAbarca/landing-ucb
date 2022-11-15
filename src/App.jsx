import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'


import Landing from './pages/Landing';
// import Layout from './layouts/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Landing />
  )
}

export default App
