import React from "react";

export default function Navigator() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand disabled' href='/'>
          Box Office
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Movies <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/tv'>
                Series
              </a>
            </li>
          </ul>
          <span className='navbar-text'>
            <a href='https://github.com/kaustubh285'>by Kaustubh Deshpande</a>
          </span>
        </div>
      </nav>
    </>
  );
}
