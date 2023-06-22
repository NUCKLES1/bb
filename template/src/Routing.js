import React from 'react'
import { Route,Routes } from 'react-router-dom'
import App from './App'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Music from './pages/Music'
import Story from './pages/Story'

const Routing = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/music" element={<Music />} />
        <Route path="story" element={<Story />} />
    </Routes>
</div>
  )
}

export default Routing