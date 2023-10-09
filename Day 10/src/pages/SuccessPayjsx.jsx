import React from 'react'
import tick from '../Assets/tick.png'
import SuccessPaycss from '../css/SuccessPaycss.css'
function SuccessPayjsx() {
  return (
    <div>
        <div className='payment'>
            <img className='tick' src={tick}></img>
            <div className='paymessage'>Successfully Recharged</div>
        </div>
    </div>
  )
}

export default SuccessPayjsx