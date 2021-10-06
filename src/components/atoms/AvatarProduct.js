import { Avatar } from "@mui/material";

export const AvatarProduct = (props) => {
    return (
        <Avatar
            variant="square"
            sx={{
                height: props.size,
                width: props.size,
            }}
            alt={props.product.name}
            src={`../../assets/${props.product.image}`}
        />
    );
};
