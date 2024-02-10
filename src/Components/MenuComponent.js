import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPath } from '../reduxSlice';


const MenuComponent = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (path) => {
    dispatch(setPath(path));
  };

  return (
    <div>
      <Link to="/" onClick={() => handleButtonClick("/")}>
        <button>Component 1</button>
      </Link>
      <Link to="/component2" onClick={() => handleButtonClick("/component2")}>
         <button>Component 2</button> 
        
      </Link>
      <Link to="/component3" onClick={() => handleButtonClick("/component3")}>
        <button>Component 3</button>
      </Link>
    </div>
  );
};

export default MenuComponent;