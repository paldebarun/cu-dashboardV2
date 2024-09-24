import React from 'react';


type EntityBannerProps = {
  text: string;
  description: string;
  leftcolor: string;
  rightcolor: string;
};


const EntityBanner = ({ text, description, leftcolor, rightcolor }: EntityBannerProps) => {
 

  return (
    <div className='p-4 shadow-lg w-10/12 mx-auto rounded-2xl border'>
      <div
        className='w-full space-y-4 py-16 px-4 rounded-2xl'
        style={{
          background: `linear-gradient(to right, ${leftcolor}, ${rightcolor})`,
        }}
      >
        <p className='text-3xl text-white'>{text}</p>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  );
};

export default EntityBanner;
