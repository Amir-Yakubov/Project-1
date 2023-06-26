import {Link} from "react-router-dom";

export function Header() {

    return <div className="main-header">
        <div className="logo-container">
            <Link to='/'>
                <img className="logo" src={require('../assets/img/logo.png')} alt='logo'/>
            </Link>
        </div>
    </div>

}