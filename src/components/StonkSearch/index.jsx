import searchIcon from '../../imgs/arrow-right-circle.svg';

import './StonkSearch.scss'

const StonkSearch = () => {
    return (
        <div className="search-container webflow-style-input">
            <input className="stonk-search" placeholder="Symbol" />
            <button className="just-send-it" type="submit"><img src={searchIcon} /></button>
        </div>
    )
}

export default StonkSearch;