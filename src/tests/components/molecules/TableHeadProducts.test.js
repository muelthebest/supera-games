import { render } from "@testing-library/react";
import { TableHeadProducts } from "../../../components/molecules/TableHeadProducts";

const product = [
    {
        id: 312,
        image: "super-mario-odyssey.png",
        name: "Super Mario Odyssey",
        quantity: 0,
        price: 197.88,
    },
];

describe("TableHeadProducts component", () => {
    test("persistência do retorno do component", () => {
        const { container, getByText } = render(<TableHeadProducts />);
        container.getElementsByClassName("MuiTableHeader-root");
        container.getElementsByClassName("MuiTableRow-root");
        container.getElementsByClassName("MuiTableCell-root");

        getByText("Imagem");
        getByText("Produto");
        getByText("Quantidade");
        getByText("SubTotal");
    });
});
