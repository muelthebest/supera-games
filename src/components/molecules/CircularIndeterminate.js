import { CircularProgress } from "@mui/material";
import { Box, styled } from "@mui/system";

const BoxCircular = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100vh",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
}));

export const CircularIndeterminate = () => {
    return (
        <BoxCircular>
            <CircularProgress />
        </BoxCircular>
    );
};
