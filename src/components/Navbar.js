import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <navbar>
                <div className="navWide">
                    <div className="wideDiv">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x"></i>
                    <div className="narrowLinks">
                        <a href="/Home">Home</a>
                        <a href="/Resume">Resume</a>
                        <a href="/Contact">Contact Me</a>
                    </div>
                </div>
            </navbar>

        )
    }
}

export default 'Navbar';