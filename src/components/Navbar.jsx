import { useState } from "react";

import { close, logo, menu } from '../assets';
import { navlinks } from '../constants';

const Navbar = () => {
  return (
   <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="free-x" className="w-[124px] h-[32px]"/>

      <ul>
        
      </ul>
   </nav>
  )
}

export default Navbar