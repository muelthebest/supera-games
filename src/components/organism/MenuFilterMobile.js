import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuFilterMobile = (props) => {
    return (
        <>
            <IconButton
                aria-label="open drawer"
                sx={{ mr: 2, display: { sm: "none" } }}
                {...props}
            >
                <MenuIcon />
            </IconButton>
        </>
    );
};
