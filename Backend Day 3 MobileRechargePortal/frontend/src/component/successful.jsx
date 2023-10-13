import { useSelector } from 'react-redux';
import successful from '../Assets/CSS/successful.css'
export const Successful = () => {
   
  const mobileNumber = useSelector((state) => state.user.mobileNumber);
  
    const name=localStorage.getItem("name");
    
  return (
    <div>
      
  <div class="gearbox">
  <div class="overlay"></div>
    <div class="gear one">
      <div class="gear-inner">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div class="gear two">
      <div class="gear-inner">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div class="gear three">
      <div class="gear-inner">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div class="gear four large">
      <div class="gear-inner">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </div>

  {/* <div > <h1 className='msg'>{name}</h1> </div> */}
    <div className='msg'>{name}! YOUR recharge is Successfull</div>
    </div>
  );
};
