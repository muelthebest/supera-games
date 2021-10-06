import { render } from "@testing-library/react";
import { CartButton } from "../../../components/molecules/CartButton";
import userEvent from "@testing-library/user-event";
import { CartGame } from "../../../components/atoms/CartGames";

describe("CartButton component", () => {
    test("persistência do retorno do component", () => {
        let test = 1;
        const { getByRole } = render(
            <CartButton onClick={() => (test += 1)} />
        );
        const buttonModify = getByRole("button");
        userEvent.click(buttonModify);

        expect(test).toEqual(2);
    });
});
