import { render } from "@testing-library/react";
import { MoneyFormatted } from "../../../components/atoms/MoneyFormatted";

describe("MoneyFormatted component", () => {
    test("persistência do texto", () => {
        const { container } = render(<MoneyFormatted price="100.50" />);

        expect(
            container.getElementsByClassName("MuiTypography-root").length
        ).toBe(1);
    });
});
