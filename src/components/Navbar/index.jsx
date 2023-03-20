import Logo from '../Logo'
import NavItem from '../NavItem'

import NAVITEMS from '../../navItems.json'

import './Navbar.scss'

const Navbar = () => {
    const getNavItems = (navItem) => {
        const {name, route} = navItem;

        return <NavItem name={name} />
    }

    return (
        <div className="navbar-container">
            <Logo />
            <ul className="nav-items">
                {NAVITEMS.map(getNavItems)}
            </ul>
        </div>
    )
}

export default Navbar;