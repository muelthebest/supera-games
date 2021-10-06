import { render } from "@testing-library/react";
import { TableBodyProducts } from "../../../components/molecules/TableBodyProducts";

const product = [
    {
        id: 1,
        image: "super-mario-odyssey.png",
        name: "Super Mario Odyssey",
        quantity: 0,
    },
];

describe("TableBodyProducts component", () => {
    test("persistência do retorno do component", () => {
        const { container, getByText } = render(
            <TableBodyProducts products={product} />
        );

        container.getElementsByClassName("MuiTable-root");
        container.getElementsByClassName("MuiTableBody-root");
        container.getElementsByClassName("MuiTableRow-root");
        container.getElementsByClassName("MuiTableCell-root");
        container.getElementsByClassName("MuiTypography-root");

        getByText(product[0].name);
        getByText(product[0].quantity);
    });
});
