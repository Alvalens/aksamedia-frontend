import React, { useState } from 'react';

interface DropdownProps {
  buttonLabel: string;
  items: {
    label: string;
    action?: () => void;
    link?: string;
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({ buttonLabel, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-600"
        onClick={toggleDropdown}
      >
        {buttonLabel}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg">
          {items.map((item, index) => (
            item.link ? (
              <a
                key={index}
                href={item.link}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={index}
                onClick={item.action}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {item.label}
              </button>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
