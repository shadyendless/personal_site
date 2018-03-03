import React from 'react';

import me from '../../images/me.jpg';
import me2x from '../../images/me@2x.jpg';
import me3x from '../../images/me@3x.jpg';

const AboutAboveTOC = () => (
    <img className="author-image" src={me} srcSet={`${me2x} 2x, ${me3x} 3x`} />
);

export default AboutAboveTOC;
