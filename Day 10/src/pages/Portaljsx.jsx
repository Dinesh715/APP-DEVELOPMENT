import React from 'react'
import Chatjsx from './Chatjsx'
import Portalcss from '../css/Portalcss.css';
import flip1 from '../Assets/filp1.png';
import flip2 from '../Assets/flip2.png'
import flip3 from '../Assets/flip3.jpg'
import song from '../Assets/song.png'
import sim from '../Assets/sim.png'
function Portaljsx() {
  return (
    <div>
        <Chatjsx/>
        <main className="content">
          <br></br>
      <div className='transaction'><h1>Here's why India prefers Us</h1></div>
      <div className='pride'>
        <div className='pride1'>
          <div className='true'><h3>True 5G</h3></div>
          <div className='true'><h3>Plans For All</h3></div>
          <div className='true'><h3>Pan India Coverage</h3></div>
          
        </div>
      </div>
        <div className='indiacontent'>
          <div className='indiaprefer'>Experience the internet at lightning speed with no latency.</div>
          <div className='indiaprefer1'>Explore plans with unlimited voice calls, data, SMS, and a host of benefits.</div>
          <div className='indiaprefer2'>Enjoy HD-quality voice calls and faster data speeds anywhere in India.</div>
        </div>
        <div className='slider'>
          <div className='card1'>
          <img className='flip1' src={flip1}></img>
          <div className='flipcontent'>STAY CONNECTED WHEN ABROAD</div>
          </div>
          <div className='card2'>
          <img className='flip1' src={flip2}></img>
          <div className='flipcontent'>ONE SUPER APP FOR YOUR DIGITAL NEEDS</div>
          </div>
          <div className='card2'>
          <img className='flip1' src={flip3}></img>
          <div className='flipcontent'>RECHARGE AND GET REWARDS!</div>
          </div>
        </div>
        <div className='newitems'><h1>Searching Something New?</h1></div>
        <div className='user'>
          <div className='cardd1'>
          <img className='flipp1' src={song}></img>
          <div className='enjoy'>Greet your callers with your favourite song!</div>
          </div>
        </div>
        <div className='user'>
          <div className='cardd1'>
          <div className='enjoy1'>Greet your callers with your favourite song!</div>
          <img className='flipp2' src={sim}></img>
          </div>
        </div>
      <br></br>
        <br></br>
      </main>
    </div>
  )
}

export default Portaljsx