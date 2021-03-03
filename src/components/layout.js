
import React from 'react'

import { Link } from 'gatsby'

import { navBar } from './layout.module.css'

const Layout = ({ children, pageTitle}) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <h1>{pageTitle}</h1>
      <nav>
        <ul>
      <li classname={navBar}><Link to={'/'}>
        Home
      </Link></li>
      <li classname={navBar}><Link to="/about">About</Link></li>
      { children }
      </ul>
      </nav>
    </main>
  );
}

export default Layout