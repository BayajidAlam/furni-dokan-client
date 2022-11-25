import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web'
import { Link } from 'react-router-dom';

const Error404 = () => {

  const container = useRef(null)

  useEffect(()=>{
    lottie.loadAnimation({
      container: container.current, 
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './error404.json' 
    });
  },[])
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='max-w-[800px] max-h-[500px] mx-auto' ref={container}></div>
      <p className='text-4xl font-serif  text-center text-[#bde0fe]'>Something went wrong! Back to <Link className='text-primary' to='/'>Home</Link></p>
    </div>
  );
};

export default Error404;