import React from 'react'
import store from '../Redux/Store'
function Sidenav() {
  return (
    <div className='app-container'>
        <nav className="sidebar">
        <div className='userimage'></div>
            <div className='profilealign'>
        <div className="profile">
          <div className="profile-info">
          <p><h3>Hello<br></br><div className='usernamealign'> {store.getState().email}</div></h3></p>
          </div>
        </div> 
        <br></br>
        <ul className="sidebar-links">
          <li>
            <a href="/number">Recharge</a>
          </li>
          <li>
            <a href="/portal">Dashboard</a>
          </li>
          <li>
            <a href="/history">Recharge History</a>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Sidenav