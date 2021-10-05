import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AlphabetFilter } from "../../../components/atoms/AlphabetFilter";

describe("AlphabetFilter component", () => {
    test("verifica se acontece oque esperado ao apertar o botão", () => {
        const { getByRole, getByText } = render(<AlphabetFilter />);

        const buttonModify = getByRole("button", {
            name: "Ordem alfabética",
        });

        userEvent.click(buttonModify);

        getByText("Crescente [A-Z]");
        getByText("Decrescente [Z-A]");
    });
});
