import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { FormikClientRegister } from "../organism/FormikClientRegister";
import schema from "../../schemas/schema";
export const ClientRegister = () => {
    return (
        <>
            <Grid item>
                <Typography variant="h5">Informações do Cliente</Typography>

                <Box pt={3}>
                    <FormikClientRegister schema={schema} />
                </Box>
            </Grid>
        </>
    );
};
