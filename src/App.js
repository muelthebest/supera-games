import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { toast } from "react-toastify";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import { DrawerProvider } from "./contexts/DrawerContext";

const queryClient = new QueryClient();

toast.configure();
function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ProductsProvider>
                    <CartProvider>
                        <DrawerProvider>
                            <Home />
                        </DrawerProvider>
                    </CartProvider>
                </ProductsProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
