import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { ClientRegister } from "../components/templates/ClientRegister";
import { FormPurchaseDescription } from "../components/templates/FormPurchaseDescription";

export const FinalForm = () => {
    return (
        <>
            <Box sx={{ height: "100vh", display: "flex", marginTop: "14vh" }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <ClientRegister />
                    <FormPurchaseDescription />
                </Grid>
            </Box>
        </>
    );
};
