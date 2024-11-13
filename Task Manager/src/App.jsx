import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Applayout from './components/Applayout';

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Applayout />
    }
  ]);

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
