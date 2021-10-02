import { Button } from "@mui/material";
import { LogoSupera } from "../molecules/LogoSupera";

export const LogoButton = (props) => {
    return (
        <>
            <Button {...props}>
                <LogoSupera />
            </Button>
        </>
    );
};
