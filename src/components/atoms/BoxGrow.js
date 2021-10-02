import { Box } from "@mui/system";

export const BoxGrow = (props) => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} {...props} />
        </>
    );
};
