import { render } from "@testing-library/react";
import { Money } from "../../../components/atoms/Money";
import { ListCartProducts } from "../../../components/molecules/ListCartProducts";

const product = [
    {
        id: 312,
        image: "super-mario-odyssey.png",
        name: "Super Mario Odyssey",
        quantity: 0,
        price: 197.88,
    },
];

describe("ListCartProducts component", () => {
    test("persistência do retorno do component", () => {
        const { container, getByText } = render(
            <ListCartProducts product={product[0]} />
        );

        container.getElementsByClassName("MuiList-root");
        container.getElementsByClassName("MuiListItem-root");
        container.getElementsByClassName("MuiListItemAvatar-root");
        container.getElementsByClassName("MuiListItemText-root");
        container.getElementsByClassName("MuiAvatar-root");
        container.getElementsByClassName("MuiBox-root");
        container.getElementsByClassName("MuiTypography-root");

        getByText(`Quantidade: ${product[0].quantity}`);
    });
});
