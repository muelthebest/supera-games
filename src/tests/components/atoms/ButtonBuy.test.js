import { render } from "@testing-library/react";
import { ButtonBuy } from "../../../components/atoms/ButtonBuy";
import userEvent from "@testing-library/user-event";

describe("ButtonBuy component", () => {
    test("persistência do retorno do component", () => {
        let test = 1;
        const { getByRole } = render(<ButtonBuy onClick={() => (test += 1)} />);
        const buttonModify = getByRole("button", {
            name: "Comprar",
        });
        userEvent.click(buttonModify);

        expect(test).toEqual(2);
    });
});
