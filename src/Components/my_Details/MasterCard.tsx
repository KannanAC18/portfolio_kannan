import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {  NavBarSection } from "../../interface";
import AboutMe from "./NavbarPages/AboutMe";
import Resume from "./NavbarPages/Resume";
import Portfolio from "./NavbarPages/Portfolio";
import Certification from "./NavbarPages/Certification";
import Contact from "./NavbarPages/Contact";
import NavBarVr from "./NavBarVr";

function MasterCard() {

  const [navBarSelection, setNavBarSelection] = useState<NavBarSection | undefined>("ABOUTME");
  const [windowWidth, setWindowWidth] = useState(0)
  
  const navItems = [
    { label: "About Me", value: "ABOUTME" },
    { label: "Resume", value: "RESUME" },
    { label: "Portfolio", value: "PORTFOLIO" },
    { label: "Certifications", value: "CERTIFICATIONS" },
    { label: "Contact", value: "CONTACT" },
  ];

  useEffect(()=>{
    const handleResize = ()=>{
      setWindowWidth(window.outerWidth)
    }
    handleResize()
    window.addEventListener('resize',handleResize)
    return () => window.removeEventListener('resize', handleResize);
  },[])


  return (
    <div className="relative flex flex-col w-full h-full p-5 overflow-auto bg-white border border-gray-500 rounded-lg dark:bg-gray-900 dark:border-gray-700">
      <div className="absolute top-0 right-0"> 

      {windowWidth > 1000 ?  <NavBar  setNavBarSelection={setNavBarSelection} navBarItems={navItems} /> : <NavBarVr setNavBarSelection={setNavBarSelection} navBarItems={navItems} />}
      </div>

      {navBarSelection === "ABOUTME" &&<div className="overflow-y-scroll no-scrollbar"> <AboutMe/> </div>}
      {navBarSelection === "RESUME" &&<div className="overflow-y-scroll no-scrollbar"> <Resume /></div>}
      {navBarSelection === "PORTFOLIO" &&<div className="overflow-y-scroll no-scrollbar"> <Portfolio /></div>}
      {navBarSelection === "CERTIFICATIONS" &&<div className="overflow-y-scroll no-scrollbar"> <Certification /></div>}
      {navBarSelection === "CONTACT" && <div className="overflow-y-scroll no-scrollbar"><Contact /></div>}
    </div>
  );
}

export default MasterCard;
