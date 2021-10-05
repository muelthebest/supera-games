import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AlphabetFilter } from "../../../components/atoms/AlphabetFilter";

describe("AlphabetFilter component", () => {
    test("deve mudar o estado de show para false ou true", () => {
        const { getByRole, getByText } = render(<AlphabetFilter />);

        const buttonModify = getByRole("button", {
            name: "Ordem alfabética",
        });

        userEvent.click(buttonModify);

        getByText("Crescente [A-Z]");
        getByText("Decrescente [Z-A]");
    });
});
