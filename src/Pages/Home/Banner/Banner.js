import React from 'react';
import BannerPic from '../../../assets/download.jpg'

const Banner = () => {
  return (
            <div className="card lg:card-side shadow-xl rounded-none my-4">
            <figure className='lg:w-1/2'>
              <img src={BannerPic} alt="" />
            </figure>
            <div className="card-body lg:w-1/2 justify-center items-center">
              
            <div className="flex gap-5">
                <div>
                  <span className="countdown font-mono text-4xl">
                      <span style={{"--value":15}}></span>
                  </span>
                  days
                </div> 
                <div>
                  <span className="countdown font-mono text-4xl">
                      <span style={{"--value":10}}></span>
                  </span>
                  hours
                </div> 
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{"--value":24}}></span>
                  </span>
                  min
                </div> 
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{"--value":36}}></span>
                  </span>
                  sec
                </div>
              </div>
        
       
       
    
             </div>
         </div>
  )
};

export default Banner;