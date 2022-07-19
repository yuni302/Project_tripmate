import React, { useState } from 'react';
import { ReactComponent as UpperArrow } from 'img/UpperArrow.svg';
import { ReactComponent as DownArrow } from 'img/DownArrow.svg';

const DropDown = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button type="button" onClick={handleOpen}>
        {isOpen ? <UpperArrow /> : <DownArrow />}
      </button>
      {isOpen && props.children}
    </>
  );
};
export default DropDown;
