import React, { createContext, useContext } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <ScreenSizeContext.Provider value={{ isSmallScreen, isLargeScreen }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);
