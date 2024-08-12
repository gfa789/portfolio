import React, { createContext, useState, useContext, useEffect } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('scroll-disabled', !isScrollEnabled);
  }, [isScrollEnabled]);

  const toggleScroll = () => {
    setIsScrollEnabled(prevState => !prevState);
  };

  return (
    <ScrollContext.Provider value={{ isScrollEnabled, toggleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);