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
          <p><h3>Welcome<br></br><div className='usernamealign'> {store.getState().email}</div></h3></p>
          </div>
        </div> 
        <br></br>
        <ul className="sidebar-links">
          
          <li>
            <a href="/portal">Dashboard</a>
          </li>
          <li>
            <a href="/plans">Recharge</a>
          </li>
          <li>
            <a href="/history">Past Actions</a>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Sidenav