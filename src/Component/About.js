import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Alert from './Alert';



function About() {
  // const [back, setback] = useState('light');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('light');

  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
      document.body.style.backgroundColor = '#171529';
      
    } else {
      setMode('light');
      showAlert('Light mode has been enabled', 'success');
      document.body.style.backgroundColor = 'white';
          }
  };
  // const toggleStyle=()=>{
  //   if(mode==='light'){
  //     setback('dark');
  //     document.body.style.color=('black');
  //     document.body.style.backgoruncolor='#564b83';
  //   }
  //   else{
  //     setback('light')
  //   }
  // }

  useEffect(() => {
    if(mode === 'light') {
        setColor('black');
    } else {
        setColor('white');
    }
  },  [mode])


    return (
        <div>
            <Navbar title='Textutiles' mode={mode} toggleMode={toggleMode}/>
            
            
            <Alert alert={alert}/>
            <div className='container'>
                <h2 className='my-3' style={{color: color}}>About Us</h2>
                <div className="accordion"  id="accordionExample">
                <div class="accordion" id="accordionExample">
  <div class="accordion-item" mode={mode} toggleMode={toggleMode} >
    <h2 class="accordion-header"  id="headingOne">
      <button class="accordion-button" style={{color: color,backgroundColor:mode==='dark'?'#564b83':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About TextUtils</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{color: color,backgroundColor:mode==='dark'?'#564b83':'white'}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" style={{color: color,backgroundColor:mode==='dark'?'#564b83':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body"style={{color: color,backgroundColor:mode==='dark'?'#564b83':'white'}} >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed"style={{color: color,backgroundColor:mode==='dark'?'#564b83':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{color: color,backgroundColor:mode==='dark'?'#564b83':'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go with in the , though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default About;