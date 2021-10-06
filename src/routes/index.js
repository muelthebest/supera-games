import { SuperaAppBar } from "../components/templates/SuperaAppBar";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { FormularioFinal } from "../pages/FormularioFinal";
import { useCart } from "../hooks/useCart";

export const PageRoutes = () => {
    const { cart } = useCart();

    return (
        <Router>
            <Route path="/" component={SuperaAppBar} />

            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/form-final" component={FormularioFinal}>
                    {cart.length === 0 ? (
                        <Redirect to="/" />
                    ) : (
                        <Route
                            exact
                            path="/form-final"
                            component={FormularioFinal}
                        />
                    )}
                </Route>

                <Route exact path="*" component={Home}>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
};
