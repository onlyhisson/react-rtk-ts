import React, { useState } from "react";
import { useAppSelector } from "app/hooks";
import { lightTheme, darkTheme } from "styles/themes";

type State = {
  count: number;
  text: string;
  isGood: boolean;
};

//const ThemeContext = React.createContext<State | null>(null);
const ThemeContext = React.createContext<any | null>(null);

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: any) => {
  const themeType: any = useAppSelector((state) => state.theme);

  const value = {
    theme: themeType === "light" ? lightTheme : darkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
