import '../Header/Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';
import searchIcon from '../../assets/images/search.svg';
import uploadIcon from '../../assets/images/upload.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';


export default function Header() {
    
    return (
        <header className="header">
            <img className="header__logo"
                src={logo}
                alt="BrainFlix Logo"
            />
            <input className="header__search"
                type="text"
                placeholder="Search"
            />
            <button className="header__upload">
                <img className="header__upload__icon"
                    src={uploadIcon}
                    alt="upload icon"
                />
                UPLOAD</button>
            <img className="header__avatar"
                src={avatar}
                alt="profile picture"
            />
        </header>
    )
}

