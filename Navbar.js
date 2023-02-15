import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.name1}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {props.name2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                About
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input onClick={props.toggleMode} className="form-check-input bg-secondary" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">toggle Mode</label>
          </div>
        </div>
      </div>
    </nav>

  )
}

Navbar.propTypes = {
  //eska mtlb name1 aur name2 hamesha string hon chahiye otherwise ye error dega console me
  name1: PropTypes.string,
  name2: PropTypes.string
  //name2 ko agar isRequired kr diya gya to esko dalna hi padega otherwise console me error milega
  // name2:PropTypes.string.isRequired
}
//Agar kisi ne name1 aur name2 set nii kara to default proptype run ho jayega 
Navbar.defaultProps = {
  name1: 'set title here',
  name2: 'set About here'
}