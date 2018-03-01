import React from 'react';
import SocialButton from '../components/SocialButton';

const IndexPage = () => (
    <div className="hero is-flex justify-content-center align-items-start flex-column">
        <h1 className="hero-header">Hello</h1>
        <h2 className="hero-header__sub">I am a designer and developer located in the Pacific Northwest.</h2>
        <div className="hero-social">
            <SocialButton url="https://www.facebook.com/jacob.foster.58" icon="fa-facebook-f" brand="facebook" />
            <SocialButton url="https://www.twitter.com/im_jacobf" icon="fa-twitter" brand="twitter" />
            <SocialButton url="https://www.linkedin.com/in/imjacobf/" icon="fa-linkedin-in" brand="linkedin" />
            <SocialButton url="https://github.com/shadyendless/" icon="fa-github" brand="github" />
        </div>
    </div>
);

export default IndexPage;
