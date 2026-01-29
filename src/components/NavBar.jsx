import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">

          <div className="flex items-center">
            <img
                className="mr-[10px]"
                src="/images/logos/my-logo.png"
                alt="my-logo"
                height={50}
                width={50}
            />
            <a href="#hero" className="logo">
              Zach Gitau
            </a>
          </div>

          {/* Navigation */}
          <nav className="desktop m-auto">
            <ul>
              {navLinks.map(({ link, name }) => (
                  <li key={name} className="group">
                    <a href={link}>
                      <span>{name}</span>
                      <span className="underline" />
                    </a>
                  </li>
              ))}
            </ul>
          </nav>

          
          <a href="#contact" className="contact-btn group ml-6">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </header>

  );
}

export default NavBar;
