import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer>
    <span>Made with ❤ by &nbsp;
      <a
        href="https://donycisneros.now.sh"
        target="_blank"
        rel="noopener noreferrer"
      >{props.author}</a>
    </span>
  </footer>
);

Footer.propTypes = {
  author: PropTypes.string.isRequired
};

export default Footer;
