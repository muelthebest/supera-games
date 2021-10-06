import { render } from "@testing-library/react";
import { FullInputMaskFormik } from "../../../components/molecules/FullInputMaskFormik";

describe("FullInputMaskFormik component", () => {
    test("persistência do retorno do component", () => {
        const { container } = render(<FullInputMaskFormik />);

        container.getElementsByClassName("MuiGrid-root");
        container.getElementsByClassName("MuiInput-root");
        container.getElementsByClassName("MuiInputLabel-root");
    });
});
