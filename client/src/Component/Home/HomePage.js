import React, { useState, useEffect } from 'react';
import '../Resources/StyleSheets/Home.css';

function HomePage() {
    
    const [typedText, setTypedText] = useState('');
    const welcomeMessage = "WEELCOME TO PANCHAMI ASSOCIATION:  CRAFTING THE BLUEPRINT OF EXCELLENCE IN CIVIL CONSTRUCTION";
    const typingSpeed = 75 ; // Adjust typing speed as needed
  
    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < welcomeMessage.length - 1) {
          setTypedText(prevText => prevText + welcomeMessage[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, typingSpeed);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  return (
    <div className='intro-page'>
  <div className='container'>
    <div className='row intro-row'>
      <div className='col-lg-6 Intro'>
        <h4 className='w-100 WORDS'>{typedText}</h4>
      </div>
      <div className='col-lg-6 Intro'>
        <img src={require('../Resources/Images/e3.png')} className='Intro-img' alt='' />
      </div>
    </div>
  </div>
</div>
  )
}

export default HomePage