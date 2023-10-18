import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Carosal =()=>{
    return(  <Carousel showThumbs={false} >
      <div>
          <img className='w-full h-[80vh] object-cover overflow-y-hidden' src="https://images.unsplash.com/photo-1696894134302-7e124a8bf2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          <p className="legend">Legend 1</p>
      </div>
      <div>
          <img className='w-full h-[80vh] object-cover overflow-y-hidden' src="https://images.unsplash.com/photo-1693409267953-3b2a658e62b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
          <p className="legend">Legend 2</p>
      </div>
      <div>
          <img className='w-full h-[80vh] object-cover overflow-y-hidden' src="https://images.unsplash.com/photo-1696253030104-cc8eae1e8f8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          <p className="legend">Legend 3</p>
      </div>
  </Carousel>)
}
export default Carosal