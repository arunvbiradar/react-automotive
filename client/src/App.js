import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Details from "./components/details";
import Blog from "./components/blog";
import BlogDetails from "./components/blog/BlogDetails";
import Default from "./components/default/Default";
import Makes from "./components/makes";
import Tools from "./components/tools/index.js";
import "./components/common/styles/styles.scss";
import Make from "./components/data/Make";

// redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <div className='main-content'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/bikes' component={Home} />
            <Route path='/details' component={Details} />
            <Route path='/makes' component={Makes} />
            <Route path='/blog' component={Blog} />
            <Route path='/tools' component={Tools} />
            <Route path='/make' component={Make} />
            <Route path='/blog/details' component={BlogDetails} />
            <Route component={Default} />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    </Provider>
  );
}

export default App;
