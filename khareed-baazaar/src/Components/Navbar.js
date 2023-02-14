import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-3" to="/">Khareed BaaZaar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Contact</NavLink>
        </li>
      </ul>

      <div className="buttons">
        <NavLink to="/" className="btn btn-outline-dark mx-2">
        Login
        </NavLink>
        <NavLink to="/" className="btn btn-outline-dark mx-2">
        Register
        </NavLink>
        <NavLink to="/" className="btn btn-outline-dark ">
        Cart(0)
        </NavLink>
      </div>

    </div>
  </div>
</nav>
    </div>
  )
}
