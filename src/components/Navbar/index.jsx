import { Link } from 'react-router-dom';

import Main from '../Main';
import About from '../About';
import Stonks101 from '../Stonks101';
import WatchList from '../WatchList';

import Logo from '../Logo';

import './Navbar.scss';

const Navbar = () => {

    const navItems = [
        {
            name: 'Home',
            path: '/',
            element: <Main />
        },
        {
            name: 'About',
            path: '/about',
            element: <About />
        },
        {
            name: 'Stonks101',
            path: '/stonks101',
            element: <Stonks101 />
        },
        {
            name: 'Watchlist',
            path: '/watchlist',
            element: <WatchList />
        },
    ]

    const getLinks = (link) => {
        const {name, path, element} = link

        if (name !== 'Home') {
            return (
                <li className="nav-links"><Link to={path} element={element}>{name}</Link></li>
            )
        }
    }

    return (
        <div className="navbar-container">
            <Logo />
            <ul className="nav-items">
                {navItems.map(getLinks)}
            </ul>
        </div>
    )
}

export default Navbar;