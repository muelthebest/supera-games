import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const MoneyFormat = styled(Typography)(({ theme }) => ({
    color: "green",
    fontSize: 18,
}));

export const Money = (props) => {
    return (
        <>
            <MoneyFormat variant="button" {...props}>
                {props.children}
            </MoneyFormat>
        </>
    );
};
