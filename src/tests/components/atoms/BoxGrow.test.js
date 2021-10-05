import { render } from "@testing-library/react";
import { BoxGrow } from "../../../components/atoms/BoxGrow";

describe("BoxGrow component", () => {
    test("persistência do retorno do component", () => {
        const { container } = render(<BoxGrow />);

        expect(container.getElementsByClassName("MuiBox-root").length).toBe(1);
    });
});
