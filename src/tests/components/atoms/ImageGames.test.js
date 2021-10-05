import { render } from "@testing-library/react";
import { ImageGames } from "../../../components/atoms/ImageGames";

const product = [
    {
        image: "super-mario-odyssey.png",
        name: "Super Mario Odyssey",
    },
];

describe("ImageGames component", () => {
    test("persistência do retorno do component", () => {
        const { getByRole } = render(<ImageGames api={product[0]} />);

        getByRole("img");
    });
});
