// IMPORTS
import { useState } from 'react';

// COMPONENT
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 // RETURN USING TAILWIND CLASSES 
  return (
    <nav>
      <div>
        <div>
          <button onClick={toggleMenu}>
            {isOpen ? (
              <svg>
                <path> 

                </path>
              </svg>
            ) : (
              <svg>
                <path>

                </path>
              </svg>
            )}
          </button>
        </div>

        // LINK VISIBLE WHEN MENU IS OPEN
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          }`}
        >
        </div>  
      </div>
    </nav>
  )

};

// EXPORT
export default Nav;