import { Typography } from "@mui/material";

export const ProductName = (props) => {
    return (
        <>
            <Typography variant="overline" color="HighlightText">
                {props.name}
            </Typography>
        </>
    );
};
