import React, { createContext, useContext, useState } from 'react';

const SideContext = createContext({
    displaySidebar: false,
    setTogglesidebar: undefined,
});
export const TeamsProvider = ({ children }) => {
  const [displaySidebar, setTogglesidebar] = useState(false);
  
  const getTeams = async () => {
    setTogglesidebar(!displaySidebar)
  };

  return (
    <SideContext.Provider
      value={{ displaySidebar, setTogglesidebar }}
    >
      {children}
    </SideContext.Provider>
  );
};

export const useSideContext = () => useContext(SideContext);
