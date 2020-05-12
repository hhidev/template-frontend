import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Auth from "./components/Auth";
import AppLayout from "./AppLayout";
import BaseStyle from "./BaseStyle";
import "antd/dist/antd.css";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <BaseStyle />
        <Router>
          <Provider store={Store()}>
            <Switch>
              <Route path="/login" exact component={Login} />
              <Auth>
                <AppLayout>
                  <Switch>
                    <Route path="/" component={Home} />
                  </Switch>
                </AppLayout>
              </Auth>
            </Switch>
          </Provider>
        </Router>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
