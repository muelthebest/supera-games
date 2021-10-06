import { render } from "@testing-library/react";
import { TableCheckoutProducts } from "../../../components/molecules/TableCheckoutProducts";

const product = [
    {
        id: 312,
        image: "super-mario-odyssey.png",
        name: "Super Mario Odyssey",
        quantity: 0,
        price: 197.88,
    },
];

describe("TableCheckoutProducts component", () => {
    test("persistência do retorno do component", () => {
        const { container, getByText } = render(
            <TableCheckoutProducts price={product[0].price} />
        );
        container.getElementsByClassName("MuiTable-root");
        container.getElementsByClassName("MuiTableFooter-root");
        container.getElementsByClassName("MuiTableRow-root");
        container.getElementsByClassName("MuiTableCell-root");
        container.getElementsByClassName("MuiTypography-root");

        getByText("TOTAL:");
    });
});
