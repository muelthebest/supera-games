import { render } from "@testing-library/react";
import { ProductGrid } from "../../../components/molecules/ProductGrid";

const product = [
    {
        id: 1,
        image: "super-mario-odyssey.png",
        name: "Super Mario Odyssey",
        quantity: 0,
    },
];

describe("ProductGrid component", () => {
    test("persistência do retorno do component", () => {
        const { container, getByText } = render(
            <ProductGrid product={product[0]} />
        );

        container.getElementsByClassName("MuiGrid-root");
        container.getElementsByClassName("MuiPaper-root");
        container.getElementsByClassName("MuiRating-root");
    });
});
