import { Route, BrowserRouter, Switch } from "react-router-dom";
import { MainContent } from "../components/templates/MainContent";
import { SuperaAppBar } from "../components/templates/SuperaAppBar";

export function Home() {
    return (
        <>
            <BrowserRouter>
                <Route path="/" component={SuperaAppBar} />
                <Switch>
                    <Route exact path="/" component={MainContent} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
