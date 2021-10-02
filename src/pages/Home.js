import { MainContent } from "../components/templates/MainContent";
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
                        <MainContent />
                    </DrawerProvider>
                </CartProvider>
            </ProductsProvider>
        </>
    );
}
