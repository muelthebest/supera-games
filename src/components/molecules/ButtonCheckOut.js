import { Button } from "@mui/material";

export const ButtonCheckOut = (props) => {
    return (
        <Button
            style={{ marginBottom: 40 }}
            type="submit"
            variant="outlined"
            color="primary"
            {...props}
        >
            {props.children}
        </Button>
    );
};
