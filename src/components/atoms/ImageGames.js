export const ImageGames = (props) => {
    return (
        <img
            src={`../../assets/${props.api.image}`}
            alt={props.api.name}
            style={{ width: 150 }}
        />
    );
};
