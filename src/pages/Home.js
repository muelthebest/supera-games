import { ResponsiveDrawer } from "../components/templates/ResponsiveDrawer";
import { SuperaAppBar } from "../components/templates/SuperaAppBar";
import { CartProvider } from "../contexts/CartContext";
import { DrawerProvider } from "../contexts/DrawerContext";
import { ProductsProvider } from "../contexts/ProductsContext";

export function Home() {
    return (
        <>
            <ProductsProvider>
                <CartProvider>
                    <DrawerProvider>
                        <SuperaAppBar />
                        <ResponsiveDrawer />
                    </DrawerProvider>
                </CartProvider>
            </ProductsProvider>
        </>
    );
}
