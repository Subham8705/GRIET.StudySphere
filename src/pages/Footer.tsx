import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
        fontSize: '0.9rem',
      }}
    >
      <p>
        <strong>Disclaimer:</strong> This site is a student nano project developed by IT-B (Batch of 2027) students of GRIET. It is <u>NOT</u> an official GRIET website. Please don’t sue us — we come in peace ✌️.
      </p>
      <p className="mt-3">
        Want to contribute? Visit the GitHub repository:
        <a
          href="https://github.com/Subham8705/GRIET.StudySphere"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          github.com/Subham8705/GRIET.StudySphere
        </a>
      </p>
    </footer>
  );
};

export default Footer;