import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component{
    render() {
    return(
    <div>
        <header className="header">
            <div className="initialLogo">
                <h1>load(HM)</h1>
            </div>
            <div className="col-lg-6 col-lg-offset-3">
                <img src={logo} className="App-logo " alt="logo" />
                <h1 className = "name">Hans Mok</h1>
                <h2 className="title">
                    With(time -> code)<br/>
                    Student. Programmer. Video game nut. <br/>
                    Sometime athlete. 
                </h2>
            </div>
        </header>
    </div>
    )}
}

export default Header;