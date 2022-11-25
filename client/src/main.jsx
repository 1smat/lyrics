import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import AllSongs from './components/AllSongs'
import Navbar from './components/Navbar'
import SingleSong from './components/SingleSong'
import AddSong from './components/AddSong'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='songs' element={<AllSongs />} />
        <Route path='add' element={<AddSong />} />
        <Route path='songs/:songInfo' element={<SingleSong />}></Route>
      </Routes>
    </BrowserRouter>
  </>
)
