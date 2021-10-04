import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MainContent } from "../components/templates/MainContent";
import { SuperaAppBar } from "../components/templates/SuperaAppBar";

export function Home() {
    return (
        <>
            <Router>
                <Route path="/" component={SuperaAppBar} />
                <Route exact path="/" component={MainContent} />
            </Router>
        </>
    );
}
