import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from '../Main';
import About from '../About';
import Stonks101 from '../Stonks101';
import WatchList from '../WatchList';
import Navbar from '../Navbar'

import './App.scss';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />
    }, 
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/stonks101",
      element: <Stonks101 />
    }, 
    {
      path: "/watchlist",
      element: <WatchList />
    },
  ])

    return (
      <div className="router-container">
        <RouterProvider router={router} />
      </div>
    )
}

export default App;
