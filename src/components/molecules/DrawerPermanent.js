import { Drawer } from "@mui/material";

export const DrawerPermanent = (props) => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: props.width,
                },
            }}
            open
        >
            {props.children}
        </Drawer>
    );
};
