import React from 'react'
import Planscss from '../css/Planscss.css';
import Chatjsx from './Chatjsx'
import Girl from '../Assets/Girl.png';
import unlimited from '../Assets/unlimited.png';
import netfliximage from '../Assets/netfliximage.png';
import zee5 from '../Assets/zee5.png';
import jiocinema from '../Assets/jiocinema.png';
import disney from '../Assets/disney.png';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
function Plansjsx() {
  return (
    <div>
        <Chatjsx/>
        <main className="content">
          <br></br><br></br>
      <div className='transaction'><h1>Pick Up your best suit Plan :)</h1></div>
      <div className='clip'>
      
        <div className='plancontent'>
          <div className='netflix'>
            <p>
              Netflix included
            </p>
          </div>
          <div className="total">
          <div className='amount'>
            <h2>₹ 1099</h2>
            <div className='details'>
              <h4>view details</h4>
            </div>
        </div>
        <div>
          <img className='unlimited' src={unlimited}></img>
        </div>
        </div>
        <div className='innerflex'>
        <div className='validity'>
          <h4>VALIDITY</h4>
        <div className='days'>
          <h4>84 Days</h4>
        </div>
        </div>
          <div className='validity1'>
          <h4>DATA</h4>
          <div className='days1'>
          <h4>2 GB/Day</h4>
        </div>
          </div>
        </div>
        <div className='subscribe'>SUBSCRIPTIONS</div>
        <div className='subimage'>
        <img className='netfliximage' src={netfliximage}></img>
        <img className='zee5' src={zee5}></img>
        <img className='jiocinema' src={jiocinema}></img>
        </div>
        <div className='button'>
        <Link to={'/number'}><div className='button12'></div></Link>
        </div>
      </div>

      <div className='spaceclip'></div>

      <div className='plancontent'>
        <div className='anniversary'>
          <p>
            Jio Anniversary - 21GB Extra
          </p>
        </div>
        <div className="total">
        <div className='amount'>
          <h2>₹ 2999</h2>
          <div className='details'>
            <h4>view details</h4>
          </div>
        </div>
        <div>
          <img className='unlimited' src={unlimited}></img>
        </div>
        </div>
        <div className='innerflex'>
        <div className='validity'>
          <h4>VALIDITY</h4>
        <div className='days'>
          <h4>365 Days</h4>
        </div>
        </div>
          <div className='validity1'>
          <h4>DATA</h4>
          <div className='days1'>
          <h4>2.5 GB/Day</h4>
        </div>
          </div>
        </div>
        <div className='subscribe'>SUBSCRIPTIONS</div>
        <div className='subimage1'>
        <img className='jiocinema' src={jiocinema}></img>
        <img className='zee5' src={zee5}></img>
        <img className='disney' src={disney}></img>
        </div>
        <div className='button'>
        <Link to={'/number'}><div className='button12'></div></Link>
        </div>
      </div>
      </div>



      <div className='clipp'>
      
        <div className='plancontent'>
          
          <div className="total">
          <div className='amount'>
            <h2>₹ 399</h2>
            <div className='details'>
              <h4>view details</h4>
            </div>
        </div>
        <div>
          <img className='unlimited' src={unlimited}></img>
        </div>
        </div>
        <div className='innerflex'>
        <div className='validity'>
          <h4>VALIDITY</h4>
        <div className='days'>
          <h4>Bill Cycle</h4>
        </div>
        </div>
          <div className='validity1'>
          <h4>BENIFITS</h4>
          <div className='days1'>
          <h4>75 GB</h4>
        </div>
          </div>
        </div>
        <div className='subscribe'>SUBSCRIPTIONS</div>
        <div className='subimage'>
        <img className='netfliximage' src={netfliximage}></img>
        <img className='jiocinema' src={jiocinema}></img>
        </div>
        <div className='button'>
          <br></br>
          <div className='btnedit'>
          <Link to={'/number'}><div className='button122'></div></Link>
          </div>
        </div>
      </div>

      <div className='spaceclip'></div>

      <div className='plancontent'>
        
        <div className="total">
        <div className='amount'>
          <h2>₹ 599</h2>
          <div className='details'>
            <h4>view details</h4>
          </div>
        </div>
        <div>
          <img className='unlimited' src={unlimited}></img>
        </div>
        </div>
        <div className='innerflex'>
        <div className='validity'>
          <h4>VALIDITY</h4>
        <div className='days'>
          <h4>Bill Cycle</h4>
        </div>
        </div>
          <div className='validity1'>
          <h4>BENIFITS</h4>
          <div className='days1'>
          <h4>Unlimited</h4>
        </div>
          </div>
        </div>
        <div className='subscribe'>SUBSCRIPTIONS</div>
        <div className='subimage1'>
        <img className='jiocinema' src={jiocinema}></img>
        <img className='zee5' src={zee5}></img>
        </div>
        <div className='button'>
          <br></br>
          <div className='btnedit'>
          <Link to={'/number'}><div className='button122'></div></Link>
          </div>
        </div>
      </div>
      </div>
      <img className='girl' src={Girl}></img>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </main>
    </div>
  )
}

export default Plansjsx