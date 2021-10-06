import { FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import InputMask from "react-input-mask";

const ErrorMessage = styled(FormHelperText)(({ theme }) => ({
    color: "#f44336",
}));

export const FullInputMaskFormik = (props) => {
    return (
        <>
            <Grid item>
                <InputLabel
                    htmlFor={props.label}
                >{`${props.label}:`}</InputLabel>
                <InputMask
                    type={props.type}
                    name={props.label}
                    value={props.value}
                    {...props}
                    mask={props.mask}
                >
                    {(input) => <Input {...input} />}
                </InputMask>

                {props.errors && <ErrorMessage>{props.errors}</ErrorMessage>}
            </Grid>
            <Grid item></Grid>
        </>
    );
};
