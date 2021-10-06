import { render } from "@testing-library/react";
import { DrawerTemporary } from "../../../components/molecules/DrawerTemporary";

describe("DrawerTemporary component", () => {
    test("persistência do retorno do component", () => {
        const { container } = render(<DrawerTemporary />);

        container.getElementsByClassName("MuiDrawer-root");
    });
});
