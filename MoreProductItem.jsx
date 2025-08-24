import React from 'react';
import first from './myimage/fourbottle1.jpg';
// import second from './myimage/fourbttle2.jpg';
import third from './myimage/fourbottle3.jpg';
import fourth from './myimage/lipistic1.png';
import fifth from './myimage/lipistic2.png';
import six from './myimage/lipistic3.png';
import seven from './myimage/lipistic4.png';
import eight from './myimage/lipistic5.png';
import nine from './myimage/makeup1.png';
import ten from './myimage/makeup2.png';
import eleven from './myimage/makeup3.png';
import twelve from './myimage/makeup4.png';
import thirteen from './myimage/simplebottle1.jpg';
import fourthteen from './myimage/simplebottle3.png';
import fiftyteen from './myimage/simplebottle4.png';
import sisteen from './myimage/simplebottle5.png';

import seventeen from './myimage/eye1.png';
import eightteen from './myimage/eye2.png';
import nineteen from './myimage/eye3.jpg';
import twenty from './myimage/eye4.jpg';
import twentyone from './myimage/eye5.png';
import twentytwo from './myimage/eye6.png';

import twentyfour from './myimage/eye8.jpg';
import twentyfive from './myimage/eye9.png';
import twentysix from './myimage/eye10.png';
import twentyseven from './myimage/eye11.png';
import twentyeight from './myimage/facewash8.png';
import twentynine from './myimage/facewash1.png';
import thirty from './myimage/facewash2.png';
import thirtyone from './myimage/facewash3.png';
import thirtytwo from './myimage/facewash4.png';
import thirtythree from './myimage/facewash5.png';
import thirtyfour from './myimage/facewash6.png';
import thirtyfive from './myimage/facewash7.png';














import styles from './MoreProductItem.module.css';


function MoreProductItem() {
  // Use the imported variables, not strings
  const imagearray = [
    first,
    // second, // Uncomment if available
    third,
    fourth,
    fifth,
    six,
    seven,
    eight, // Uncomment if available
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourthteen,
    fiftyteen,
    sisteen,
    seventeen,eightteen,nineteen,twenty,twentyone,twentytwo,twentyfour,twentyfive,twentyseven,
    twentysix,twentyeight,twentynine,thirty,thirtyone,thirtytwo,thirtythree,thirtyfour,
    thirtyfive
  ];

  return (
    <>
    <div className={styles.Allitemblock}>
      {imagearray.map((image, index) => (
        <img key={index} src={image} alt={`item-${index + 1}`} />
        
      ))}
      
    </div>
     <div className={styles.Allitemblock}>
      {imagearray.map((image, index) => (
        <img key={index} src={image} alt={`item-${index + 1}`} />
        
      ))}
      
    </div>
     <div className={styles.Allitemblock}>
      {imagearray.map((image, index) => (
        <img key={index} src={image} alt={`item-${index + 1}`} />
        
      ))}
      
    </div>
     <div className={styles.Allitemblock}>
      {imagearray.map((image, index) => (
        <img key={index} src={image} alt={`item-${index + 1}`} />
        
      ))}
      
    </div>
    
    </>
    
  );
}

export default MoreProductItem;