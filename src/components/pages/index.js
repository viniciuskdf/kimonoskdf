import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo, homeObjFour, homeObjFive} from '../InfoSection/Data';
import Navbar from '../Navbar'; 
import Memberships from '../Memberships';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Home = () => {
const[isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
};

    return (
        <>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <HeroSection />
                {/* <InfoSection {...homeObjFive}/> */}
                <Footer />
        </>
    );
};

export default Home
