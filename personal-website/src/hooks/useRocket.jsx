import React, { createContext, useState, useContext } from 'react';

const RocketContext = createContext();

export const RocketProvider = ({ children }) => {
  const [rocketPosition, setRocketPosition] = useState([0, 0, 35]);

  return (
    <RocketContext.Provider value={{ rocketPosition, setRocketPosition }}>
      {children}
    </RocketContext.Provider>
  );
};

export const useRocket = () => useContext(RocketContext);