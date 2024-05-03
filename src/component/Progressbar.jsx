import React, { useEffect, useState } from 'react'

const Progressbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (currentPosition / maxScrollHeight) * 100;
        setScrollPosition(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
    
  return (
    <div  style={{ width: `${scrollPosition}%` }} className={`gradient-bg  h-[2px] rounded-[4px] fixed top-0 left-0 z-50 w-full `}></div>
  )
}

export default Progressbar