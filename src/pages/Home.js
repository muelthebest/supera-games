import { ResponsiveDrawer } from "../components/templates/ResponsiveDrawer";
import { SuperaAppBar } from "../components/templates/SuperaAppBar";
import { DrawerProvider } from "../contexts/DrawerContext";

export function Home() {
    return (
        <>
            <DrawerProvider>
                <SuperaAppBar />
                <ResponsiveDrawer />
            </DrawerProvider>
        </>
    );
}
