import React from 'react';
import { images  } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="letter g" />
    </div>

    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
        Adipiscing tempus ullamcor
        per lobortis odio tellus arcu vo
        lutpat. Risus placerat morbi vol
        utpat habitasse interdum mi an
        liquam In sed odio nec aliquet.
        </p>
        <button className='custom__button'>Know More</button>
      </div>


      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife } alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
        Adipiscing tempus ullamcor
        per lobortis odio tellus arcu vo
        lutpat. Risus placerat morbi vol
        utpat habitasse interdum mi an
        liquam In sed odio nec aliquet.
        </p>
        <button className='custom__button'>Know More</button>
      </div>

    </div>
    
  </div>
);

export default AboutUs;
