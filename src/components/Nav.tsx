import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className="s-header__nav">

        <ul className="s-header__menu-links">
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="blog.html">Journal</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>

        <div className="s-header__contact">
          <a href="contact.html" className="btn btn--primary s-header__contact-btn">Let's Work Together</a>
        </div>

      </nav>
    </>
  )
}

export default Nav