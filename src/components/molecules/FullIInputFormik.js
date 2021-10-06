import { FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import { styled } from "@mui/system";

const ErrorMessage = styled(FormHelperText)(({ theme }) => ({
    color: "#f44336",
}));
export const FullInputFormik = (props) => {
    return (
        <>
            <Grid item>
                <InputLabel
                    htmlFor={props.label}
                >{`${props.label}:`}</InputLabel>
                <Input
                    name={props.label}
                    type="text"
                    values={props.values}
                    {...props}
                />
                {props.errors && <ErrorMessage>{props.errors}</ErrorMessage>}
            </Grid>
        </>
    );
};
