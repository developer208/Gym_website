import React from 'react'
import SubComponentBox from './SubComponentBox'
import './SubComponent.css'
import fimage1 from '../../assets/images/2.svg';
import fimage2 from '../../assets/images/3.svg';
import fimage3 from '../../assets/images/4.svg';
const SubComponent = () => {
  return (
    <div id='features'>
        <h1>Shop Now</h1>
        <div className='a-container'>
            <SubComponentBox image={fimage1} title="Equipment" />
            <SubComponentBox image={fimage2} title="Supplements" />
            <SubComponentBox image={fimage3} title="Accessories" />
        </div>
    </div>
  )
}

export default SubComponent
