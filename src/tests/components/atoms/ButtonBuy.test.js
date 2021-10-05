import { render } from "@testing-library/react";
import { ButtonBuy } from "../../../components/atoms/ButtonBuy";

describe("ButtonBuy component", () => {
    test("persistência do retorno do component", () => {
        const { getByText } = render(<ButtonBuy />);

        getByText("Comprar");
    });
});
