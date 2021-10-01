import { createContext, useState } from "react"


export const DrawerContext = createContext({})

export const DrawerProvider = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    return(
        <DrawerContext.Provider value={{ mobileOpen, handleDrawerToggle }}>
        {props.children}
        </DrawerContext.Provider>
    )

}