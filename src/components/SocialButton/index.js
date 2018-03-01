import React from 'react';
import PropTypes from 'prop-types';

const SocialButton = props => (
    <a className="inline-block" href={props.url}>
        <i className={`fab ${props.icon} is-inline-flex justify-content-center align-items-center`} />
        <span className="hide-on-medium">&nbsp;&nbsp;&nbsp;{props.brand}</span>
    </a>
);
SocialButton.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
};

export default SocialButton;
