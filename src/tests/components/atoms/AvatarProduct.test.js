import { render } from "@testing-library/react";
import { AvatarProduct } from "../../../components/atoms/AvatarProduct";

const product = [
    {
        image: "super-mario-odyssey.png",
        name: "Super Mario Odyssey",
    },
];

describe("AvatarProduct component", () => {
    test("persistência do retorno do component", () => {
        const { getByRole } = render(<AvatarProduct product={product} />);

        getByRole("img");
    });
});
