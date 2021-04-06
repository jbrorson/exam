import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { SocialIcon } from 'react-social-icons';
import '../../index.css';

function Navbar() {
  const [isClosed, setClosed] = useState(false)

  const isStatic = useMediaQuery({
    query: '(min-width: 640px)',
  })

  return (
    <div className="flex bg-gray-100">
      {(isStatic || !isClosed) && (
        <aside className={`bg-white w-64 min-h-screen flex flex-col flex-wrap ${isStatic ? '' : 'fixed'}`}>
          <div className="bg-white border-r border-b px-4 h-20 flex items-center justify-between">
            <span className="text-blue py-2">
              Portfolio
            </span>

            {!isStatic && (
              <button
                tabIndex="1"
                aria-label="Close menu"
                titel="Close menu"
                className="w-10 0-1"
                onClick={() => setClosed(true)}
              >
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            )}
          </div>

          <div className="border-r flex-grow">
            <nav>
              <ul>
                <NavLink
                  to exact='/'
                  className="flex items-center py-5 px-5 my-6 p-5 rounded text-red-200 hover:text-red-400">
                  Home
                </NavLink>
                <NavLink
                  to=''
                  className="flex items-center py-5 px-5 my-6 p-5 rounded text-red-200 hover:text-red-400">
                  About
                </NavLink>
                <NavLink
                  to='/projects'
                  className="flex items-center py-5 px-5 my-6 p-5 rounded text-red-200 hover:text-red-400">
                  Latest Work
                </NavLink>
                <NavLink
                  to='/contact'
                  className="flex items-center py-5 px-5 my-6 p-5 rounded text-red-200 hover:text-red-400">
                  Contact Me
                </NavLink>
              </ul>
            </nav>
          </div>
          <div>
            <SocialIcon url="https://www.linkedin.com/in/josefine-brorson-b8a69a118/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://github.com/jbrorson" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://www.linkedin.com/in/josefine-brorson-b8a69a118/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
          </div>
        </aside>
      )}

      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-20 flex items-center justify-center">
          {!isStatic && (isClosed && (
            <button
              tabIndex="1"
              aria-label="Open menu"
              titel="Open menu"
              className="w-10 0-1"
              onClick={() => setClosed(false)}
            >
              <svg
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          )
          )}

          <div className="flex flex-grow items-center justify-between px-3">
            <NavLink
              to='/'
              exact
              activeClassName="text-white"
              className="inflex-flex items-center py-6 px-3 mr-4 text-red-200 hover:text-red-300 tracking-widest">
              josefine brorson
            </NavLink>
            <button className="text-blue-700 underline">Logga in</button>
          </div>
        </header>
      </main>
    </div>
  )
}

export default Navbar;
