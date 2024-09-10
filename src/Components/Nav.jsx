// IMPORTS
import { useState } from 'react';

// COMPONENT
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // RETURN USING TAILWIND CLASSES
  return (
    <nav>
      <div>
        {/* HAMBURGER MENU */}
        <div>
          <button onClick={toggleMenu} type="button">
            {isOpen ? (
              <svg>
                <path />
              </svg>
            ) : (
              <svg>
                <path />
              </svg>
            )}
          </button>
        </div>

        {/* LINK VISIBLE WHEN MENU IS OPEN */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="/">Home</a>
          <a href="/ambulance">Ambulance</a>
          <a href="/emergency">Emergency Contacts</a>
          <a href="/doctors">Doctors</a>
          <a href="/clinics">Clinics</a>
          <a href="/hospitals">Hospitals</a>
          <a href="/pharmacy">Pharmacy</a>
          <a href="/blood-bank">Blood Bank</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/about">About  Us</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

// EXPORT
export default Nav;
