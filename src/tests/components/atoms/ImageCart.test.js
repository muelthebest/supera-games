import { render } from "@testing-library/react";
import { ImageCart } from "../../../components/atoms/ImageCart";

describe("ImageCart component", () => {
    test("persistência do retorno do component", () => {
        const { getByRole } = render(<ImageCart />);

        getByRole("img");
    });
});
