import { Button } from "@mui/material";

export const ButtonBuy = (props) => {
    return (
        <>
            <Button
                sx={{ width: "90%" }}
                variant="contained"
                color="success"
                {...props}
            >
                Comprar
            </Button>
        </>
    );
};
