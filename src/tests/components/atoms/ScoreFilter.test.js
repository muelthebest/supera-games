import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ScoreFilter } from "../../../components/atoms/ScoreFilter";

describe("ScoreFilter component", () => {
    test("verifica se acontece oque esperado ao apertar o botão", () => {
        const { getByRole, getByText } = render(<ScoreFilter />);

        const buttonModify = getByRole("button", {
            name: "Classificação",
        });

        userEvent.click(buttonModify);

        getByText("Até 1 estrela");
        getByText("Até 2 estrelas");
        getByText("Até 3 estrelas");
        getByText("Até 4 estrelas");
        getByText("Até 5 estrelas");
    });
});
