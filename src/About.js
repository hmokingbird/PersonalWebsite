import React from 'react';
import './About.css';
class About extends React.Component{
    render() {
        return(
    <div class = "col-lg-4 col-lg-offset-4 About">
        <h1>About me</h1>
        <br/>
        <p className="intro">
        Hi! I'm Hans. I'm an aspiring software engineer, currently pursuing a degree in Software Engineering with a passion for sports in my free time.<br/><br/>
        I enjoy logical problems, so my interest lean towards the backend.
        </p>
    </div>
        )}
}

export default About;