import { render } from "@testing-library/react";
import { CartGame } from "../../../components/atoms/CartGames";

describe("CartGames component", () => {
    test("persistência do retorno do component", () => {
        const { container } = render(<CartGame />);

        expect(container.getElementsByClassName("MuiIcon-root").length).toBe(1);
    });
});
