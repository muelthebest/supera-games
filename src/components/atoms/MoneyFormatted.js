import { Money } from "./Money";

export const MoneyFormatted = (props) => {
    return (
        <>
            <Money>
                {props.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                })}
            </Money>
        </>
    );
};
