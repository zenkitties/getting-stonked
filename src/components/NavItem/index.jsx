import './NavItem.scss'

const NavItem = (props) => <li className="nav-item" id={props.name}>{props.name}</li>

export default NavItem;