import React from 'react';
import twitter from "../images/twitter.png"
import github from "../images/github.png"
import linkedin from '../images/linkedin.png';

export const Footer = () => {
    return (
        <footer>
        <div>
            <a href="http://linkedin.com/in/hmokingbird">
                <img className="linkedin" src="linkedin" width="40px" alt="linkedin" />
            </a>
            <a href="https://github.com/hmokingbird">
                <img className="github" src="github" width="40px" alt="github" />
            </a>
            <a href="https://twitter.com/h_mokingbird">
                <img className="twitter" src="twitter" width="40px" alt="twitter" />
            </a>
        </div>
        </footer>)
}

export default Footer;

        /*
        [
            {
                id: 1,
                link: "http://linkedin.com/in/hmokingbird",
                name: 'footerLinkedIn',
                src: linkedin,
                width='40',
                text: 'linkedin'
            },
            {
                id: 2,
                link: "https://github.com/hmokingbird",
                name: "footerGithub",
                src: github,
                width: '40',
                text: 'github'
            },
            {
                id: 3,
                link: "https://twitter.com/hmokingbird",
                name: "footerTwitter",
                src: twitter,
                width: '40',
                text: 'twitter'
            }
        ].map((FooterIcon) => {
    return (
    <a key={FooterIcon.id} href={FooterIcon.link}>
        <img className={FooterIcon.name} src={FooterIcon.src} width={FooterIcon.width} alt={FooterIcon.text} />
    </a>)
})
);
}
*/



