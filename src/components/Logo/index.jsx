import { Link } from 'react-router-dom';

import stonkIcon from '../../imgs/trending-up.svg';

import './Logo.scss'

const Logo = () => <Link className="logo" to="/">Getting Stonked <img className="stonkIcon" src={stonkIcon} /></Link>

export default Logo;

