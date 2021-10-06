import { render } from "@testing-library/react";
import { SearchWrapper } from "../../../components/molecules/SearchWrapper";

const product = [
    {
        id: 1,
        image: "super-mario-odyssey.png",
        name: "Super Mario Odyssey",
        quantity: 0,
    },
];

describe("SearchWrapper component", () => {
    test("persistência do retorno do component", () => {
        const { container } = render(<SearchWrapper product={product[0]} />);

        container.getElementsByClassName("MuiSearchIcon-root");
    });
});
