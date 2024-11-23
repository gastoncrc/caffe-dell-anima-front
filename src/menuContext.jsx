import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const data = { menu, toggleMenu };

  return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>;
};
