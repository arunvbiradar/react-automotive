import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Details from './components/details';
import Blog from './components/blog';
import BlogDetails from './components/blog/BlogDetails';
import Default from './components/default/Default';
import Brands from './components/brands';
import Tools from './components/tools/index.js';
import './components/common/styles/styles.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
        <div className="main-content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/bikes" component={Home} />
            <Route path="/details" component={Details} />
            <Route path="/brands" component={Brands} />
            <Route path="/blog" component={Blog} />
            <Route path="/tools" component={Tools} />
            <Route path="/blog/details" component={BlogDetails} />
            <Route path="/" component={Default} />
          </Switch>
        </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
