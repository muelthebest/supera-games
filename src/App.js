import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { toast } from "react-toastify";

const queryClient = new QueryClient();

toast.configure();
function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        </>
    );
}

export default App;
