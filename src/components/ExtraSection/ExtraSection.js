import React from 'react';
import img1 from '../../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'
import img2 from '../../assets/christina-wocintechchat-com-swi1DGRCshQ-unsplash.jpg';
import img3 from '../../assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg'
import img4 from '../../assets/images (2).jpg'
const ExtraSection = () => {
  return (
    <section>
      <p className='uppercase text-center text-2xl mt-2'>Quality is our capital</p>
          <div className='flex justify-between my-4'>
          <img className='w-1/5 h-96' src={img2} alt="" />
          <img className='w-1/5 h-96' src={img3} alt="" />
          <img className='w-1/5 h-96' src={img1} alt="" />
          <img className='w-1/5 h-96' src={img4} alt="" />
        </div>
    </section>
  );
};

export default ExtraSection;