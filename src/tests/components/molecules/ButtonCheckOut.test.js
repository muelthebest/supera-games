import { render } from "@testing-library/react";
import { ButtonCheckOut } from "../../../components/molecules/ButtonCheckOut";
import userEvent from "@testing-library/user-event";

describe("ButtonCheckOut component", () => {
    test("persistência do retorno do component", () => {
        let test = 1;
        const { getByRole } = render(
            <ButtonCheckOut onClick={() => (test += 1)}>
                Finalizar Compra
            </ButtonCheckOut>
        );
        const buttonModify = getByRole("button", {
            name: "Finalizar Compra",
        });
        userEvent.click(buttonModify);

        expect(test).toEqual(2);
    });
});
