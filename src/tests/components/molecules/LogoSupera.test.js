import { render } from "@testing-library/react";
import { LogoSupera } from "../../../components/molecules/LogoSupera";

describe("LogoSupera component", () => {
    test("persistência do retorno do component", () => {
        const { container, getByText } = render(<LogoSupera />);

        container.getElementsByClassName("MuiTypography-root");
        getByText("SUPERA GAMES");
    });
});
