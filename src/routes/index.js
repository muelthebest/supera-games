import { SuperaAppBar } from "../components/templates/SuperaAppBar";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { FormularioFinal } from "../pages/FormularioFinal";

export const PageRoutes = () => {
    return (
        <Router>
            <Route path="/" component={SuperaAppBar} />

            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/form-final" component={FormularioFinal} />

                <Route exact path="*" component={Home}>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
};
