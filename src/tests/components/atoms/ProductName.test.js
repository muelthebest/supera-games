import { render } from "@testing-library/react";
import { ProductName } from "../../../components/atoms/ProductName";

describe("ProductName component", () => {
    test("persistência do texto", () => {
        const { getByText } = render(<ProductName name="Teste" />);

        getByText("Teste");
    });
});
