import { render } from "@testing-library/react";
import { DrawerPermanent } from "../../../components/molecules/DrawerPermanent";

describe("DrawerPermanent component", () => {
    test("persistência do retorno do component", () => {
        const { container } = render(<DrawerPermanent>Teste</DrawerPermanent>);

        expect(container.getElementsByClassName("MuiDrawer-root").length).toBe(
            1
        );
    });
});
