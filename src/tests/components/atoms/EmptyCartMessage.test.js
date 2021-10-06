import { render } from "@testing-library/react";
import { EmptyCartMessage } from "../../../components/atoms/EmptyCartMessage";

describe("EmptyCartMessage component", () => {
    test("persistência do texto", () => {
        const { getByText } = render(<EmptyCartMessage />);

        getByText("Seu carrinho está vazio");
    });
});
