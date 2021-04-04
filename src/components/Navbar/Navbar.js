import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../../index.css';

function Navbar() {
  const [isClosed, setClosed] = useState(false)

  const isStatic = useMediaQuery({
    query: '(min-width: 640px)',
  })

  return (
    <div className="flex bg-gray-100">
      {(isStatic || !isClosed) && (
        <aside className="bg-white w-64 min-h-screen flex flex-col">
          <div className="bg-white border-r border-b px-4 h-10 flex items-center">
            <span className="text-blue py-2">
              Application
            </span>
          </div>
          <div className="border-r flex-grow">
            <nav>
              <ul>
                <NavLink
                  to exact='/'
                  className="flex items-center py-3 px-3 my-6 p-3 rounded text-red-200 hover:text-red-400">
                  Home
                </NavLink>
                <NavLink
                  to='/projects'
                  className="flex items-center py-3 px-3 my-6 p-3 rounded text-red-200 hover:text-red-400">
                  My Latest Work
                </NavLink>
                <NavLink
                  to='/contact'
                  className="flex items-center py-3 px-3 my-6 p-3 rounded text-red-200 hover:text-red-400">
                  Contact Me
                </NavLink>
              </ul>
            </nav>
          </div>
        </aside>
      )}

      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-10 flex items-center justify-center">
          {!isStatic &&
            (isClosed ? (
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
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            ) : (
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
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            ))}


          <div className="flex flex-grow items-center justify-between px-3">
            <NavLink
              to='/'
              exact
              activeClassName="text-white"
              className="inflex-flex items-center py-6 px-3 mr-4 text-red-200 hover:text-red-300 text-2xl cursive tracking-widest">
              josefineb
            </NavLink>
            <button className="text-blue-700 underline">Logga in</button>
          </div>
        </header>
      </main>
    </div>
  )
}

export default Navbar;
