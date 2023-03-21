import Main from './components/Main';
import About from './components/About';
import Stonks101 from './components/Stonks101';
import WatchList from './components/WatchList';

const NAV_ITEMS = [
    {
        name: "Home",
        path: "/",
        element: <Main />
    },
    {
        name: "About",
        path: "/about",
        element: <About />
    },
    {
        name: "Stonks 101",
        path: "/stonks-101",
        element: <Stonks101 />
    },
    {
        name: "Watch List",
        path: "/watch-list",
        element: <WatchList />
    }
]

export default NAV_ITEMS;