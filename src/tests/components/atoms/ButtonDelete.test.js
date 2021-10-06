import { render } from "@testing-library/react";
import { ButtonDelete } from "../../../components/atoms/ButtonDelete";
import userEvent from "@testing-library/user-event";

describe("ButtonDelete component", () => {
    test("persistência do retorno do component", () => {
        let test = 1;
        const { getByRole } = render(
            <ButtonDelete onClick={() => (test += 1)} />
        );
        const buttonModify = getByRole("button");
        userEvent.click(buttonModify);

        expect(test).toEqual(2);
    });
});
