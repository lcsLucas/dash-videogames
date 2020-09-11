import React from 'react'

import Navbar from './navbar'
import Logo from '../../resources/logo.svg'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.setLogin = this.setLogin.bind(this)
    }

    setLogin(e) {
        e.preventDefault();
        this.props.setLogin(!this.props.login);
    }

    render() {

        return (
            <header className="header">
                <Navbar login={this.props.login} />
                <div className="logo">
                    <a onClick={this.setLogin} title="Acessar a Live" href="#login">
                        <img src={Logo} className="d-block img-fluid" />
                    </a>
                </div>
            </header>
        )
    }

}

/*
function Header({login}) {

    function setLogin() {
        console.log('teste');
        return true;
    }

    useEffect(() => {
        setTimeout(() => {
            setLogin();
        }, 3000)
    })

    return (
        <header className="header">
            <Navbar login={login} />
            <div className="logo">
                <a title="Acessar a Live" href="">
                    <img src={Logo} className="d-block img-fluid" />
                </a>
            </div>
        </header>
    )
}
*/

export default Header