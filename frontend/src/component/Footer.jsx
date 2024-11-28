import React from 'react';

const Footer = () => {
  return (
    <div className="container py-4 bg-secondary text-center">
      <p className="m-0 text-white">
        &copy;{' '}
        <a className="text-white font-weight-bold" href="#">
          Blog Application
        </a>
        . All Rights Reserved. Designed by{' '} Uday Lashkari
        <a
          className="text-white font-weight-bold"
          href="https://htmlcodex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          HTML Codex
        </a>
      </p>
    </div>
  );
};

export default Footer;
