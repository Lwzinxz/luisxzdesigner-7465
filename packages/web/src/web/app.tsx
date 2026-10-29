import { Route, Switch } from "wouter";
import Index from "./pages/index";
import AllProjects from "./pages/all-projects";
import FeedbacksPage from "./pages/feedbacks";
import ForBusiness from "./pages/for-business";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/portfolio" component={AllProjects} />
        <Route path="/portfolio/:category" component={AllProjects} />
        <Route path="/feedbacks" component={FeedbacksPage} />
        <Route path="/para-empresas" component={ForBusiness} />
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
