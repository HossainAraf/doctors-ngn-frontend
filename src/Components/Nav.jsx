// IMPORTS
import { useState } from 'react';

// COMPONENT
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

};

// EXPORT
export default Nav;
