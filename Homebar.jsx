import React from 'react';
import FirstItemBlock from './FirstItemBlock.jsx';
import SecondvideoBlock from './SecondvideoBlock.jsx';
import ThirdItemBlock from './ThirdItemBlock.jsx';
import Animation from './Animation.jsx';
import Footer from './Footer.jsx';
import BannerOne from './BannerOne.jsx';
import SavingZone from './SavingZone.jsx';
import Navbar from './Navbar.jsx';
import Savingzoneblock from './Savingzoneblock.jsx';

function Homebar (){
    return (
        <>
        <Navbar />
        <BannerOne />
        <FirstItemBlock />
        <Animation />
        <SecondvideoBlock />
        <ThirdItemBlock />
        <Animation />
        <SavingZone />
        <Savingzoneblock />
        <FirstItemBlock />
        <Footer />
        </>
    );
}

export default Homebar;
