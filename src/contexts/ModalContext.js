import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <ModalContext.Provider
            value={{ anchorEl, handleClick, handleClose, open, id }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};
