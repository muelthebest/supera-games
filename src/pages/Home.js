import { ResponsiveDrawer } from "../components/templates/ResponsiveDrawer";
import { SuperaAppBar } from "../components/templates/SuperaAppBar";
import { DrawerProvider } from "../contexts/DrawerContext";
import { ProductsProvider } from "../contexts/ProductsContext";

export function Home() {
    return (
        <>
            <ProductsProvider>
                <DrawerProvider>
                    <SuperaAppBar />
                    <ResponsiveDrawer />
                </DrawerProvider>
            </ProductsProvider>
        </>
    );
}
