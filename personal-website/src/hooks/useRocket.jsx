import React, { createContext, useState, useContext } from 'react';
import STARTING_Z from '../../public/constants';

const RocketContext = createContext();

export const RocketProvider = ({ children }) => {
  const [rocketPosition, setRocketPosition] = useState([0, 0, STARTING_Z + 7]);

  return (
    <RocketContext.Provider value={{ rocketPosition, setRocketPosition }}>
      {children}
    </RocketContext.Provider>
  );
};

export const useRocket = () => useContext(RocketContext);