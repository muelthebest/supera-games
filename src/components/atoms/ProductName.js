import { Typography } from "@mui/material";

export const ProductName = (props) => {
    return (
        <>
            <Typography variant="overline" color="black">
                {props.name}
            </Typography>
        </>
    );
};
