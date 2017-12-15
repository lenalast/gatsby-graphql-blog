import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="header">
      <h1 className="header-title" >
        <Link to="/">
          Dev blog
        </Link>
      </h1>
  </div>
)

export default Header