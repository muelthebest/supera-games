import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PriceFilter } from "../../../components/atoms/PriceFilter";

describe("PriceFilter component", () => {
    test("verifica se acontece oque esperado ao apertar o botão", () => {
        const { getByRole, getByText } = render(<PriceFilter />);

        const buttonModify = getByRole("button", {
            name: "Preço",
        });

        userEvent.click(buttonModify);

        getByText("Até 50 reais");
        getByText("Até 100 reais");
        getByText("Até 150 reais");
        getByText("Até 200 reais");
        getByText("Até 300 reais");
    });
});
