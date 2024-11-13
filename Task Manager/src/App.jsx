import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Applayout from './components/Applayout';
import Home from './components/Home';

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Applayout />,
      children :[
        {
          path : "/",
          element : <Home/>
        }
      ] 
    }
  ]);

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
