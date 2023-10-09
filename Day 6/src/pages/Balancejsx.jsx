import React from 'react'
import Chatjsx from './Chatjsx'
import Balance from '../css/Balance.css';
import world from '../Assets/world.jpeg';
import delight from '../Assets/delight.jpeg';
import flight from '../Assets/flight.jpeg';
function Balancejsx() {
  return (
    <div>
        <Chatjsx/>
        <main className="content">
        <br></br><br></br>
        <div className='transaction'><h1>Want Some Special Services?</h1></div>

      <div className='service'>
        <div className='serviceimages'>
          <img className='delight' src={delight}></img>
          <h1>
            <div className='heading'>ISD Delights<p>
              <div className='content'>Explore plans with 
                  ISD calls at lower rates, talk-time benefits, FREE SMS, and Top-up vouchers.
              <div className='popular'><button className='buttonn'>Find Popular Plans</button></div>
              </div></p>
            </div>
          </h1>
        </div>
      </div>

      <br></br><br></br><br></br>

      <div className='service1'>
        <div className='serviceimages1'>
          <h1>
            <div className='heading1'>International Roaming Benifits<p>
              <div className='content'>Enjoy unlimited outgoing calls within the visited country, calls to India, 
              incoming calls, data usage, and SMS.
              <div className='popular'><button className='buttonn'>Perfect palns to roam</button></div>
              </div></p>
            </div>
          </h1>
          <img className='delight' src={world}></img>
        </div>
      </div>
      <br></br><br></br><br></br>


      <div className='service'>
        <div className='serviceimages'>
          <img className='delight' src={flight}></img>
          <h1>
            <div className='heading2'>In-flight connectivity <br></br>packs<p>
              <div className='content'>Recharge before onboarding and enjoy mid-air connectivity <br></br> with internet access, outgoing calls, and SMS.
              <div className='popular'><button className='buttonn'>Plans you may like</button></div>
              </div></p>
            </div>
          </h1>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>

      </main>
    </div>
  )
}

export default Balancejsx