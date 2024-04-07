import { useState, useEffect } from 'react';

import mainImg from '../../img/main.png';
import wideMainImg from '../../img/main.png';

export default function Banner() {
  const [imageSrc, setImageSrc] = useState(mainImg);

  useEffect(() => {

    // handle image change at 1440px
    function handleResize() {
      if (window.innerWidth >= 1440) {
        setImageSrc(wideMainImg);
      } else {
        setImageSrc(mainImg);
      }
    };

    // add event listener
    window.addEventListener('resize', handleResize);
    handleResize(); // call on mount

    // when un-mounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative">
      <img src={imageSrc} alt="main pic" />

      <div 
        className="s1200px:absolute s1200px:left-20 s1200px:bottom-10
                 text-white s1200px:w-630 p-8 bg-gradient-to-r 
                 from-interstellarBlue to-richBlue" 
      >
        <div className="text-5xl font-bold">
          We crush your competitors, goals, and sales records - without the B.S.
        </div>

        <button type="button" className="mt-5 bg-yuzuJam py-2 px-5 rounded-md">GET FREE CONSULTATION</button>
      </div>
    </section>
  );
}
