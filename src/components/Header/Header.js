import '../Header/Header.scss';
import '../../styles/global.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/iTube.png';
import searchIcon from '../../assets/images/search.svg';
import uploadIcon from '../../assets/images/upload.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';


export default function Header() {

    return (
        <header className="header">
            <div className="header__features">
                <Link to="/" className="header__logo-link">
                    <img className="header__logo"
                        src={logo}
                        alt="BrainFlix Logo"
                    />
                </Link>
                <div className="header__section">
                    <div className="header__search-bar">
                        <input className="header__search"
                            type="text"
                            placeholder="Search"
                        />
                        <img className="header__search-icon"
                            src={searchIcon}
                            alt="search"
                        />
                    </div>
                    <img className="header__avatar"
                        src={avatar}
                        alt="profile picture"
                    />
                    <Link to="/upload" className="header__upload-link">
                        <button className="header__upload">
                            <img className="header__upload__icon"
                                src={uploadIcon}
                                alt="upload icon"
                            />
                            UPLOAD</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

