import { Drawer } from "@mui/material";
import { useDrawerResponsive } from "../../hooks/useDrawerResponsive";

export const DrawerTemporary = (props) => {
    const { window } = props;
    const { mobileOpen, handleDrawerToggle } = useDrawerResponsive();

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: props.width,
                },
            }}
        >
            {props.children}
        </Drawer>
    );
};
